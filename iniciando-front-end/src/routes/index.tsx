import React from 'react';

import { Switch } from "react-router-dom";
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Route from "./Route";
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/forgot-password" exact component={ForgotPassword} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
