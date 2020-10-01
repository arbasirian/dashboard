import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Layout Components
import AuthLayoutRoute from 'layouts/auth-layout/auth-layout-route.component';
import DashboardLayoutRoute from 'layouts/dashboard/dashboard-layout-route.component';


// Pages Component
import AuthenticationPage from 'pages/authentication/authentication.component';
import DashboardPage from 'pages/dashboard/dashboard.component';
import * as storageService from 'services/browser-storage';

class App extends Component {
  render() {
    return(
      <Router>  
        <Switch>  
          <Route exact path="/">  
            { storageService.get('DashboardToken') ? <Redirect to="/dashboard" />   : <Redirect to="/auth/login" />  } 
          </Route>  

          {/* Auth Layout Pages */}
          <AuthLayoutRoute path="/auth" component={AuthenticationPage}/>  

          {/* Dashboard Layout Pages */}
          <DashboardLayoutRoute path="/dashboard"  component={ DashboardPage }/>  


        </Switch>  
      </Router>  
    )
  }
}

export default App;
