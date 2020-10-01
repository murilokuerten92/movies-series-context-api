  
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ResultsSearch from './pages/ResultsSearch';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ResultsSearch} />

            </Switch>
        </BrowserRouter>
    )
}