import React from 'react'
import { useForm } from 'react-hook-form';

const UpdateUser = ({ userInfo, onUpdateUser }) => {
    const { email, username, firstName, lastName } = userInfo;
    const { register, handleSubmit } = useForm();

    const updateUser = (user) => onUpdateUser({...user, username});
    return (
        <div className="update-user">
            <form className="form-design" onSubmit={handleSubmit(updateUser)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Email</label>
                        <input defaultValue={email} name="email" type="email" ref={register({ required: true })} placeholder="Please enter Email" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>First Name</label>
                        <input defaultValue={firstName} name="firstName" type="text" ref={register({ required: true })} placeholder="Please enter First Name" />
                    </div>
                    <div className="input-item">
                        <label>Last Name</label>
                        <input defaultValue={lastName} name="lastName" type="text" ref={register({ required: true })} placeholder="Please enter Last Name" />
                    </div>
                </div>
                <div className="input-wrapper">

                    <button className="btn submit-btn" type="submit">Update User</button>
                </div>

            </form>
        </div>
    )
}

export default UpdateUser;
