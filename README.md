# Creathus

Sua plataforma de cursos online [Acesse agora](https://creathus.herokuapp.com/).

### Libes 
- Styled-components (Css no javascript) 
    Facilita a manipulação do css, diminui a utilização de classes e é possível utilizar as propriedades do componente.
- Axios
    Cliente HTTP baseado em promessa.
- Date-fns 
    Formatações de datas e horas.

### Estrutura 
    Estrutura aninhada.
    Pastas agrupadas por funcionalidades, arquivos js,css e test juntos por componentes.
    > api (Global)
    > assets (Global)
        global styels (css)
        icons (Global)
    > components (Global)
    > public-app (Rotas publicas)
    > types (Typescript)
    > utils (Funções reutilizavéis)

## Como rodar 

### `npm install`

Instalar as dependências.
Logo após inicie com

### `npm start`

Iniciar aplicação
Abra [http://localhost:3000](http://localhost:3000) para visializar no navegador.

### `npm test`

Teste unitários simples com @testing-library/react 

### `npm run build`

Compila o aplicativo para produção na pasta `build`.\