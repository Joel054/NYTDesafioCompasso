import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../../App';
import TechnologyPage from '../pages/Technology';
import SciencePage from '../pages/Science';

const RoutePages = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={App} />
            <Route path='/Technology' component={TechnologyPage} />
            <Route path='/Science' component={SciencePage} />
            {/* <Route component={NotFound}/> */}
        </Switch>
    </BrowserRouter>
)
export default RoutePages;