import React, { Fragment } from 'react';
import GlobalStyle from './styles/globalStyles';
import { Landing, SignUp, Login } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </GlobalProvider>
    </Fragment>
  );
}

export default App;
