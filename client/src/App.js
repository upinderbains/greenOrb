import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';
import { Landing, SignUp, Login } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </Provider>
    </Fragment>
  );
}

export default App;
