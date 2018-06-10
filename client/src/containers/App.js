import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import history from '../services/history';
import {mainRoutes} from '../routes';
import CssBaseline from '@material-ui/core/CssBaseline';

/**
 * Pages
 * */

const mainSwitch = (
    <Switch>
        {mainRoutes.map(function(item, index) {
            return (
                item.wrapper ? 'Something else' : <Route key={index} path={item.path} component={item.component}/>
            );
        })}
    </Switch>
);

/**
 * App
 */
export default class App extends React.Component {
    /**
     * @return {jsx}
     */
    render() {
        return (
            <div>
                <CssBaseline/>
                <Router history={history}>
                    {mainSwitch}
                </Router>
            </div>
        );
    }
}
