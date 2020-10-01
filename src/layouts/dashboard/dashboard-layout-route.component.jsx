import React, { useEffect } from 'react';
import { Route, useHistory } from 'react-router-dom';
import DashboardLayout from './dashboard-layout.component';
import * as storageService from 'services/browser-storage';

const DashboardLayoutRoute = ({ component: Component, ...rest }) => {
    const history = useHistory();
    useEffect(() => {
        if (!storageService.get('DashboardToken')) {
            history.push(`/auth/login`);
        }
    })
    return (
        <Route {...rest} render={matchProps => (
            <DashboardLayout>
                <Component {...matchProps} />
            </DashboardLayout>
        )} />
    )
};

export default DashboardLayoutRoute;  