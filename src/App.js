import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/:userID/places" component={UserPlaces} />
          <Route exact path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
