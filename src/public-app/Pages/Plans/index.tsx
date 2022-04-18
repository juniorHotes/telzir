import React, { useEffect, useState } from 'react';
import { Wrap, SimulationWrap, InfoWrap, FormSection, Grid } from './styles';
import { InputDropdown } from '../../../components/InputDropdown';
import { TextInput } from '../../../components/TextInput';
import { Service } from '../../services/Service';
import { Link } from 'react-router-dom';
import View from '../../../components/View';
import moneyFormat from '../../../utils/moneyFormat';

const defaultSimulation = {
  comFaleMais: 0,
  semFaleMais: 0,
}

function Plans(): JSX.Element {
  const [data, setData] = useState<any>()
  const [simulation, setSimulation] = useState<any>(defaultSimulation)

  useEffect(() => {
    _init()
  }, [])

  const _init = async () => {
    const response = await Service.getPlan()
    setData(response)
  }

  const handleInput = (e: any) => {

    let _data = {
      ...simulation,
      [e.name]: { ...e }
    }

    const originPrice = _data?.origem?.preco || 0
    const targetPrice = _data?.destino?.preco || 0
    const time = _data?.tempo?.value || 0
    const plan = _data?.plano?.value || 0

    if (_data?.plano) {
      const totalPrice = (_data?.origem?.id !== _data?.destino?.id) ? (originPrice + targetPrice) : originPrice
      const acre = Number((totalPrice / data?.acrecimo).toFixed(2))
      const semFaleMais = Math.abs((time * totalPrice))
      const comFaleMais = (time > plan) ? (Math.abs((time - plan) * Number((totalPrice + acre).toFixed(2)))).toFixed(2) : 0

      setSimulation({
        ..._data,
        semFaleMais: semFaleMais.toFixed(2) || 0,
        comFaleMais: comFaleMais || 0
      })
    } else {
      setSimulation(_data)
    }
  }

  return (
    <View title={'FaleMais'} padding="0 16px">
      <Wrap>
        <InfoWrap>
          <p>Com o plano FaleMais você fala muito mais pagando bem menos <i className='bx bx-wink-smile' ></i></p>

          <div>
            <h1>Planos</h1>
            <ul>
              <li><h1>FaleMais 30</h1></li>
              <li><h1>FaleMais 60</h1></li>
              <li><h1>FaleMais 120</h1></li>
            </ul>
          </div>
        </InfoWrap>
        <FormSection>
          <h3>Faça uma simulação e veja qual plano que mais se adapta a você</h3>
          <Grid>
            <InputDropdown
              label='Origem'
              placeholder='DDD de Origem'
              name='origem'
              options={data?.ddd_price?.origem}
              propertyToShow="label"
              handleChange={handleInput}
            />
            <InputDropdown
              label='Destino'
              placeholder='DDD de Destino'
              name='destino'
              options={data?.ddd_price?.destino}
              propertyToShow="label"
              handleChange={handleInput}
            />

            <TextInput
              label='Tempo'
              placeholder='Tempo da ligação'
              name='tempo'
              type='number'
              onChange={(e: any) => handleInput({
                name: e.target.name,
                value: Number(e.target.value)
              })}
              flexDirection='column'
            />

            <InputDropdown
              label='Plano FaleMais'
              placeholder='Escolha o plano'
              name='plano'
              options={data?.plano?.map((item: number) =>
                ({ label: `${data?.label} ${item}`, value: item }))
              }
              propertyToShow="label"
              handleChange={handleInput}
            />
          </Grid>
          <SimulationWrap>
            <div>
              <h2>Com FaleMais <i className='bx bx-cool'></i></h2>
              <p>{moneyFormat(simulation.comFaleMais)}</p>
            </div>
            <div>
              <h2>Sem FaleMais <i className='bx bx-confused' ></i></h2>
              <p>{moneyFormat(simulation.semFaleMais)}</p>
            </div>
          </SimulationWrap>
        </FormSection>
        <span>* O valor do plano pode variar para cada tipo de combinação de DDD de origem e destino, você só paga 10% acima do valor por minuto caso exceda o tempo predestinado pelo plano. <Link to={'#'}>Saiba mais</Link></span>
      </Wrap>
    </View>
  );
}

export default Plans;
