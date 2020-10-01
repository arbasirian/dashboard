import React from 'react'
import './register-form.styles.scss';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const showLogin = () => history.push(`/auth/login`);

    const onLogin = ({ email, username, password }) => {
        console.log(email, username, password);
        showLogin()
    };
    return (
        <div className="register-form">
            <form className="form-design" onSubmit={handleSubmit(onLogin)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Email</label>
                        <input name="email" type="email" ref={register({ required: true })} placeholder="Please enter Email" />
                    </div>



                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Username</label>
                        <input name="username" type="text" ref={register({ required: true })} placeholder="Please enter Username" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Password</label>
                        <input name="password" type="password" ref={register({ required: true })} placeholder="Please enter Password" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <button className="btn submit-btn" type="submit">submit</button>

                </div>

            </form>
        </div>
    )
}

export default RegisterForm
