import Modal from 'antd/lib/modal/Modal';
import NewUserForm from 'components/new-user-form/new-user-form.component';
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addNewUser } from 'redux/user/user.actions';
import './new-user.styles.scss';

const NewUser = ({ addUser }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const newUser = (user) => {
        addUser(user);
        setShowUpdate(false);
    }
    return (
        <div className="new-user">
           <button className="btn new-btn" onClick={ () => setShowUpdate(true) }>Add New User</button>
           <Modal
                visible={showUpdate}
                centered
                footer={false}
                width="80%"
                onCancel={ () => setShowUpdate(false) }
            >
                <NewUserForm onAddUser={ (user) => newUser(user)}  />
            </Modal>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addUser: (user) => dispatch(addNewUser(user)),
})

export default connect(null, mapDispatchToProps)(NewUser);
