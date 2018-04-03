import React from 'react';
import TopNavigation from '../containers/TopNavigations';
import Auth from '../services/auth0';
import Button from 'material-ui/Button';

const auth = new Auth();

export default class IndexPage extends React.Component {
    constructor(props){
        super(props);

        this.onLoginClick = this.onLoginClick.bind(this);
    }

    onLoginClick(e) {
        e.preventDefault();

        auth.login();
    }

    render() {
        return (
            <div>
                <TopNavigation/>
                <Button variant="raised" color="secondary" onClick={this.onLoginClick}>
                    Login
                </Button>
            </div>
        );
    }
};
