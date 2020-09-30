import React from 'react';
import './login-form.styles.scss';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const showDashboard = () => history.push(`/dashboard`);

    const onLogin = ({ email, password }) => {
        if(email === 'admin@admin.com' && password === 'admin') showDashboard()
    };
    return (
        <div className="login-form">
            <div className="header">Login</div>
            <form className="form-design" onSubmit={handleSubmit(onLogin)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Email</label>
                        <input name="email" type="email" ref={register({ required: true })} placeholder="Please enter Email" />
                    </div>
                    <div className="input-item">
                        <label>Password</label>
                        <input name="password" type="password" ref={register({ required: true })} placeholder="Please enter Password" />
                    </div>
                    <button className="btn submit-btn" type="submit">submit</button>

                </div>

            </form>
        </div>
    )
}

export default LoginForm;
