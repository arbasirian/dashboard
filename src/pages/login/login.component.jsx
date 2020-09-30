import React from 'react'
import login from 'assets/images/login.svg';
import './login.styles.scss';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const showRegister = () => history.push(`/auth/register`)

    return (
        <div className="login-page">
            <div className="auth-container">
                <div className="left-wrapper">
                    <div className="image-container">
                        <img src={login} alt="authentication" />
                    </div>
                    <div className="footer">
                        Don't have an account? <span className="register" onClick={showRegister}>Register</span>
                    </div>
                </div>
                <div className="right-wrapper">
                    <div className="form-container">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;
