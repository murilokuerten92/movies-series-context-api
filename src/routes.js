  
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ResultsSearch from './pages/ResultsSearch';
//import Profile from './pages/Profile';
//import Register from './pages/Register';
//import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ResultsSearch} />
               {/* <Route path='/register' component={Register} />
                <Route path='/profile' component={Profile} />
    <Route path='/incidents/new' component={NewIncident} /> */}
            </Switch>
        </BrowserRouter>
    )
}