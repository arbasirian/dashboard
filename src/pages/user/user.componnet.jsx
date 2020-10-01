import React from 'react'
import NewUser from 'components/new-user/new-user.component'
import UserList from 'components/user-list/user-list.component'

const UserPage = () => {
    return (
        <div className="user-page">
            <NewUser />
            <UserList />
        </div>
    )
}

export default UserPage
