import React from 'react';

import SearchGifsPage from 'pages/search-gifs/search-gifs.component';
import TodoPage from 'pages/todo/todo.components';
import UserPage from 'pages/user/user.componnet';
import { Redirect, Route } from 'react-router-dom';
import ProfilePage from 'pages/profile/profile.component';

const DashboardPage = ({ match }) => {
    return (
        <>
            <Route exact path="/dashboard">
                <Redirect to="/dashboard/search-gifs" />
            </Route>
            <Route path={`${match.path}/search-gifs`} component={SearchGifsPage} />
            <Route path={`${match.path}/user-list`} component={UserPage} />
            <Route path={`${match.path}/todo-list`} component={TodoPage} />
            <Route path={`${match.path}/profile/:username`} component={ProfilePage} />
        </>
    )
}

export default DashboardPage;
