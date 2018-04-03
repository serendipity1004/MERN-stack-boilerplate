import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../services/history';
import {ResponsiveDrawer} from '../components';
import {mainRoutes} from '../routes';

/**
 * Pages
 * */

const mainSwitch = (
    <Switch>
        {mainRoutes.map(function (item, index) {
            return (
                item.wrapper ? 'Something else' : <Route key={index} path={item.path} component={item.component}/>
            )
        })}
    </Switch>
);

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Router history={history}>
                    {mainSwitch}
                </Router>
            </div>
        );
    }
}