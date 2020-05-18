import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Landing from './components/Landing';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { isLogin } from './utils';
import SelectRoom from './components/SelectRoom';
import Room from './components/Room';
// import Frontpage from './components/FrontPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={(props) =>
          isLogin()
            ? <SelectRoom {...props} />
            : <Landing />
        }></Route>
        <PublicRoute restricted={true} component={SignIn} path='/login' exact />
        <PublicRoute restricted={true} component={SignUp} path='/signup' exact />
        <PrivateRoute component={props => <Room {...props} />} path='/rooms/:room'></PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
