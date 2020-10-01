import React from 'react'
import UpdateUser from 'components/update-user/update-user.component';
import { selectUser } from 'redux/user/user.selectors';
import { connect } from 'react-redux';
import { updateUser } from 'redux/user/user.actions';
import { useHistory } from 'react-router-dom';

const ProfilePage = ({ match, userInfo, updateUserData}) => {
    const history = useHistory();
    const updateData = (user) =>  {
        updateUserData(user)
        history.push(`/dashboard/user-list`)
    }
    return (
        <div className="profile-page">
            <UpdateUser userInfo={ userInfo }  onUpdateUser={ (user) => updateData(user) }  />
        </div>
    )
}
const mapStateToProps = (state, {match}) => ({
    userInfo: selectUser(match.params.username)(state)
});

const mapDispatchToProps = dispatch => ({
    updateUserData: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
