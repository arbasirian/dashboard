import SearchGifsPage from 'pages/search-gifs/search-gifs.component';
import TodoListPage from 'pages/todo-list/todo-list.components';
import UserListPage from 'pages/user-list/user-list.componnet';
import React from 'react'
import { Redirect, Route } from 'react-router-dom';

const DashboardPage = ({ match }) => {
    return (
        <>
            <Route exact path="/dashboard">
                <Redirect to="/dashboard/search-gifs" />
            </Route>
            <Route path={`${match.path}/search-gifs`} component={SearchGifsPage} />
            <Route path={`${match.path}/user-list`} component={UserListPage} />
            <Route path={`${match.path}/todo-list`} component={TodoListPage} />
        </>
    )
}

export default DashboardPage;
