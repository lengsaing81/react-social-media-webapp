import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </Switch>
  </Router>
}

export default App;
