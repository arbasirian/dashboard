import React, { useState } from 'react'

import deleteIcon from 'assets/images/delete.png';
import editIcon from 'assets/images/edit.png';


import { selectUserList } from 'redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { deleteUser, updateUser } from 'redux/user/user.actions';
import Modal from 'antd/lib/modal/Modal';
import UpdateUser from 'components/update-user/update-user.component';



const UserList = ({ userList, deleteUser, updateUserData }) => {
    const [showUpdate, setShowUpdate] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const onUpdate = (user) => {
        setShowUpdate(true)
        setSelectedUser(user)
    }
    const updateData = (user) =>  {
        updateUserData(user)
        setShowUpdate(false);
    }

    return (
        <div className="user-list">
            <table className="table-design ">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList?.length > 0 ? userList.map(({ username, firstName, lastName, email }, index) =>
                            <tr key={index}>
                                <td>{username}</td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{email}</td>
                                <td>
                                    <button className="btn action-btn" onClick={ () => onUpdate({ username, firstName, lastName, email }) }><img src={editIcon} alt="" /></button>
                                    <button className="btn action-btn" onClick={() => deleteUser(username)}><img src={deleteIcon} alt="" /></button>
                                </td>
                            </tr>
                        ) :
                            <tr>
                                <td colSpan="5">No User Found</td>
                            </tr>
                    }

                </tbody>
            </table>
            <Modal
                visible={showUpdate}
                centered
                footer={false}
                width="80%"
                onCancel={ () => setShowUpdate(false) }
            >
                <UpdateUser userInfo={ selectedUser }  onUpdateUser={ (user) => updateData(user) }  />
            </Modal>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
});

const mapDispatchToProps = dispatch => ({
    deleteUser: (username) => dispatch(deleteUser(username)),
    updateUserData: (user) => dispatch(updateUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
