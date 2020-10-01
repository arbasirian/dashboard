import React from 'react'

import deleteIcon from 'assets/images/delete.png';
import editIcon from 'assets/images/edit.png';


import { selectUserList } from 'redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux';
import { deleteUser } from 'redux/user/user.actions';

import { useHistory } from 'react-router-dom';



const UserList = ({ match, userList, deleteUser }) => {
    const history = useHistory();

    const showProfile = (username) => history.push(`profile/${username}`);


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
                                    <button className="btn action-btn" onClick={ () => showProfile(username) }><img src={editIcon} alt="" /></button>
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
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    userList: selectUserList
});

const mapDispatchToProps = dispatch => ({
    deleteUser: (username) => dispatch(deleteUser(username)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
