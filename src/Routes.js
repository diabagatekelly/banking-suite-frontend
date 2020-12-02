import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import HomeUnauth from './HomeUnauth';
import Account from './Account';
import RegisterLoginForm from './RegisterLoginForm';

function Routes({isLogged}) {
  return (
    <Switch>  
      <Route path="/home" exact>
        <HomeUnauth isLogged={isLogged} />
      </Route>
      <Route path="/register-login" exact>
        <RegisterLoginForm />
      </Route>
      <Route path="/account" exact>
        <Account isLogged={isLogged} />
      </Route>

      <Redirect to="/home" exact/>  
    </Switch>
  );
}

export default Routes;