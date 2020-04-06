import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//importações das rotas a partir daqui
import App from '../../App';
import TechnologyPage from '../pages/Technology';
import SciencePage from '../pages/Science';


const RoutePages = () => (
    <BrowserRouter>
        <Switch>
        {/* //aqui vai as rotas */}
        <Route path='/'exact={true} component={App} />
        <Route path='/Technology' component={TechnologyPage} />
        <Route path='/Science' component={SciencePage} />
        {/* <Route component={NotFound}/> */}
        </Switch>
    </BrowserRouter>
)
export default RoutePages;