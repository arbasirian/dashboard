import React from 'react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { selectUserList } from 'redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const NewUserForm = ({ onAddUser, userList }) => {
    const { register, handleSubmit, reset, errors } = useForm();
    const updateUser = (user) => {
        onAddUser(user);
        reset();
    }
    const checkHaveUser = (username) => {
        const oldUser = userList.find((user) => user.username === username)
        if (oldUser) return false;
        return true;
    }
    return (
        <div className="new-user-form">
            <form className="form-design" onSubmit={handleSubmit(updateUser)}>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Email</label>
                        <input name="email" type="email" ref={register({ required: true })} placeholder="Please enter Email" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>Username</label>
                        <input name="username" type="text" ref={register({ required: true, validate: (username) => checkHaveUser(username) })} placeholder="Please enter Username" />
                        {errors.username && <span className="error">Username is required and it should be unique</span>}
                    </div>
                </div>
                <div className="input-wrapper">
                    <div className="input-item">
                        <label>First Name</label>
                        <input name="firstName" type="text" ref={register({ required: true })} placeholder="Please enter First Name" />
                    </div>
                    <div className="input-item">
                        <label>Last Name</label>
                        <input name="lastName" type="text" ref={register({ required: true })} placeholder="Please enter Last Name" />
                    </div>
                </div>
                <div className="input-wrapper">
                    <button className="btn submit-btn" type="submit">Add New User</button>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
})
export default connect(mapStateToProps)(NewUserForm);
