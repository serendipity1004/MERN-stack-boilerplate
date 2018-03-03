import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

/**
 * Pages
 * */

import IndexPage from '../pages/Index';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <BrowserRouter>
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