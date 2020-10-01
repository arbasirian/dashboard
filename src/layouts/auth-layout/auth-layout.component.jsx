import React from 'react';
import './auth-layout.styles.scss';

const AuthLayout = ({ children }) => (
    <div className="auth-layout">
        {children}
    </div>
);

export default AuthLayout;