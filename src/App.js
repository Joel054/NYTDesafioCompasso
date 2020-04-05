import React from 'react';
// import api from './services/api'
import LinkWrapper from './components/LinkWrapper';
import Main from './components/NewsList'
function App() {
  return (
    <div className="App">
      <br/>
      {/* <h1>{api.api}</h1> */}
      {/* {api.urlApi} */}
      <Main/>
      <br/>
      <LinkWrapper to="/ " activeStyle={{}}>Início</LinkWrapper>
      <br/>
      <LinkWrapper to="/Technology">Tecnologia</LinkWrapper>
      
    </div>
  );
}

export default App;
