import React from 'react';
import Home from './components/Home/Home';
import UserPanel from './components/Registration/UserPanel';
import LogIn from './components/Registration/LogIn';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='userpanel' component={UserPanel} />
          <Route path='login' component={LogIn} />
        </Switch>
        </>
      </HashRouter>
    </div>
  );
}

export default App;
