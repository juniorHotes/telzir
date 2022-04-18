import React from 'react';
import { Link } from 'react-router-dom';
import View from '../../../components/View';
import { Flex, LinkWrap, MainInfo, ItemsWrap, BannerWrap } from './styles';
import { plansAndServices } from './mockData'

function Home(): JSX.Element {
  return (
    <>
      <BannerWrap>
        <div>
          <h1>Na Telzir você encontra os melhores serviços</h1>
          <ul>
            <li><h2>A melhor internet de fibra</h2></li>
            <li><h2>Os melhores planos de telefonia</h2></li>
            <li><h2>Stream de vídeos com qualidade e melhor velocidade</h2></li>
          </ul>
        </div>
      </BannerWrap>
      <View padding="0 0 48px 0" maxwidth="unset">
        <View title={['Internet Fibra', 'Planos Telzir e mais serviços pra você']} padding="0 16px">
          <Flex alignitems="stretch" flexdirection="column">
            {
              plansAndServices.map((data: any, idx: number) => (
                <Link to={data.link} key={`ps-${idx}`}>
                  <LinkWrap>
                    <MainInfo>
                      <h2>{data.title}</h2>
                      <div className="description"><span>{data.description}</span></div>
                    </MainInfo>
                    {
                      (data.items.length > 0) && (
                        <ItemsWrap>
                          {
                            data.items.map((item: any, i: number) => (
                              <div key={`psitem-${i}`}>
                                {
                                  item?.bx_class && (
                                    <span><i className={`bx bx-${item.bx_class}`}></i></span>
                                  )
                                }
                                {
                                  item?.text && (
                                    <span>{item?.text}</span>
                                  )
                                }
                              </div>
                            ))
                          }
                        </ItemsWrap>
                      )
                    }
                  </LinkWrap>
                </Link>
              ))
            }
          </Flex>
        </View>
      </View>
    </>
  );
}

export default Home;
