import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import TodoListingPage from './pages/TodoListing';

const AppElement = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: lightblue;
  min-height: 100vh;
`;

function App() {
  return (
    <AppElement>
      <Router>
        <Switch>
          <Route component={TodoListingPage} path='/' exact />
        </Switch>
      </Router>
    </AppElement>
  );
}

export default App;
