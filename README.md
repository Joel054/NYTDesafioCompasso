
###Portal utilizando ReactJS com [Create React App](https://github.com/facebook/create-react-app) para a exibição de notícias consumindo a api do THE NEW YORK TIMES.

## Ferramentas Escolhidas

Para realizar a tarefa do desafio, foi utilizado o framework [Material UI](https://material-ui.com/), que traz componentes visuais previamente estruturados e estilizados, a fim de trazer, além de padronização visual, mais velocidade de produção de componentes. O objetivo do uso do Material UI no projeto foi principalmente exercitar o uso de componentes criados por terceiros, situação que ocorrerá frequentemente em outros projetos.

Em questões de UI, foi pensado um layout simples, que trouxesse facilidade e agilidade na hora de navegar entre as funcionalidades, de forma que não polua muito a interface e destine o usuário diretamente às necessidades.

A aplicação se baseou em cards, esses capazes de exibir os conteúdos de forma limpa e simplificada, reduzindo assim a sensação de "desorganização" quando há muito conteúdo disponível.

A estrutura do projeto é apresentada abaixo, buscando manter uma organização trazendo uma explicação clara de onde encontram-se cada recurso no projeto.

├───public
└───src
    ├───components
    │   ├───Card
    │   ├───Header
    │   ├───Modal
    │   ├───pages
    │   └───Routes
    └───services

Além da separação dos componentes, em `/services` é possível encontrar o arquivo `api.js,` responsável este por armazenar as configurações da API e a conexão com a mesma. Foi utilizada a lib [Axios](https://github.com/axios/axios) para este fim.

## Scripts
No diretório do projeto, execute:
### `npm start`
Localmente, o projeto irá estar disponível no caminho [http://localhost:3000](http://localhost:3000).

### Build
Se desejar realizar um processo de Build deste projeto, basta executar o comando:
### `npm run build`
