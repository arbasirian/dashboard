import React from 'react';
import './register.styles.scss';

import login from 'assets/images/login.svg';
import { useHistory } from 'react-router-dom';
import RegisterForm from 'components/register-form/register-form.component';

const RegisterPage = () => {
    const history = useHistory();
    const showRegister = () => history.push(`/auth/login`)
    
    return (
        <div className="register-page">
            <div className="auth-container">
                <div className="left-wrapper">
                    <div className="image-container">
                        <img src={login} alt="authentication" />
                    </div>
                    <div className="footer">
                        Do you have an account?  <span className="register" onClick={showRegister}>Login</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="header">Register</div>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}

export default RegisterPage;
