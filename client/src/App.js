import React, { Fragment, useEffect } from 'react';
import GlobalStyle from './styles/globalStyles';
import { Landing, SignUp, Login } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import Home from './components/Home';
import PrivateRoute from './utils/PrivateRoute';
import { loadUser } from './actions/auth';
import Layout from './components/Layout/Layout';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/home" component={Home} layout={Layout} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
