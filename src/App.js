import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import PublicRoute from './components/PublicRoute';
import { isLogin } from './utils';
import SelectRoom from './components/SelectRoom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={isLogin() ? SelectRoom : Landing}></Route>
        {/* <Route exact path='/login' component={SignIn}></Route> */}
        <PublicRoute restricted={true} component={SignIn} path='/login' exact />
        <Route exact path='/signup' component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
