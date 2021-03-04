import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTE_CHANGE_CONFIRM, ROUTE_HOME } from './constants';
import ChangeConfirmationPage from './pages/ChangeConfirmation';

import TodoListingPage from './pages/TodoListing';

import { store } from './store';

const AppElement = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: lightblue;
  min-height: 100vh;
`;

function App() {
  return (
    <Provider store={store}>
      <AppElement>
        <Router>
          <Switch>
            <Route component={TodoListingPage} path={ROUTE_HOME} exact />
            <Route
              component={ChangeConfirmationPage}
              path={ROUTE_CHANGE_CONFIRM}
              exact
            />
          </Switch>
        </Router>
      </AppElement>
    </Provider>
  );
}

export default App;
