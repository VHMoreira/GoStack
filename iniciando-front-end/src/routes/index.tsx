import React from 'react';

import { Switch } from "react-router-dom";
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Route from "./Route";
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/reset-password" exact component={ResetPassword} />

    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/profile" exact component={Profile} isPrivate />
  </Switch>
);

export default Routes;
