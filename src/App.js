import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Layout Components
import AuthLayoutRoute from 'layouts/auth-layout/auth-layout-route.component';
import DashboardLayoutRoute from 'layouts/dashboard/dashboard-layout-route.component';


// Pages Component
import AuthenticationPage from 'pages/authentication/authentication.component';
import HomePage from 'pages/home/home.component';

class App extends Component {
  render() {
    return(
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/auth/login" />  
          </Route>  

          {/* Auth Layout Pages */}
          <AuthLayoutRoute path="/auth" component={AuthenticationPage}/>  

          {/* Dashboard Layout Pages */}
          <DashboardLayoutRoute path="/dashboard"  component={ HomePage }/>  


        </Switch>  
      </Router>  
    )
  }
}

export default App;
