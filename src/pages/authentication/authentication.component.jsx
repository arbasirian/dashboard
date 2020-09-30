import React from 'react'
import './authentication.styles.scss';
import { Redirect, Route } from 'react-router-dom';
import LoginPage from 'pages/login/login.component';
import RegisterPage from 'pages/register/register.component';

const AuthenticationPage = ({ match }) => {
    return (
        <div className="authentication-page">
            <Route exact path="/auth">
                <Redirect to="/auth/login" />
            </Route>
            <Route exact path={`${match.path}/login`} component={LoginPage} />
            <Route path={`${match.path}/register`} component={RegisterPage} />
        </div>
    )
}

export default AuthenticationPage;
