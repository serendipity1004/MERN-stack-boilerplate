import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import history from '../services/history';

/**
 * Pages
 * */

import IndexPage from '../pages/Index';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter history={history}>
                    <div>
                        <Switch>
                            <Route exact path="/" component={IndexPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}