import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Toggle } from '@fluentui/react';
import styled from 'styled-components';
import { Provider, useDispatch } from 'react-redux';

import SectionTitle from './components/SectionTitle';
import SectionContainer from './components/SectionContainer';
import ChangeConfirmationPage from './pages/ChangeConfirmation';
import TodoListingPage from './pages/TodoListing';

import { useIsDarkMode } from './hooks';
import themeingConfig from './config/themeing';

import { store } from './store';

import { ROUTE_CHANGE_CONFIRM, ROUTE_HOME, TOGGLE_MODE } from './constants';
import SimpleErrorBoundary from './components/SimpleErrorBoundary';

const AppElement = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: ${themeingConfig.lightBgColor};
  min-height: 100vh;
  padding: 5em 0;

  & .todo_app_section_container {
    background-color: #fefefe;
  }

  & input,
  & input::placeholder,
  & .ms-Dropdown-title {
    background-color: ${themeingConfig.lightInputBg};
    color: ${themeingConfig.lightInputColor};
  }
  ${(props) =>
    props.darkMode
      ? `
    background-color: ${themeingConfig.darkBgColor};
    color: ${themeingConfig.darkTextColor};

    & input, & input::placeholder, & .ms-Dropdown-title {
      background-color: ${themeingConfig.darkInputBg};
      color: ${themeingConfig.darkInputColor};
    }

    & .ms-Button {
      background-color: ${themeingConfig.darkButtonBg};
      color: ${themeingConfig.darkButtonColor};
      border: ${themeingConfig.darkButtonBorder};
    }

    & .ms-Button:disabled {
      background-color: ${themeingConfig.darkButtonDisabledBg};
      color: ${themeingConfig.darkButtonDisabledColor};
    }

    & .todo_app_section_container {
      background-color: ${themeingConfig.darkSectionBg};
    }

    & .ms-Toggle-stateText {
      color: ${themeingConfig.darkToggleColorStateColor};
    }
  `
      : ''}
`;

const ToggleContainer = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin: 0;
`;

function App() {
  // const mode = useSelector((state) => dotProp.get(state, 'appState.mode'));
  const isDarkMode = useIsDarkMode();
  const dispatch = useDispatch();

  const toggleMode = () => {
    dispatch({ type: TOGGLE_MODE });
  };

  return (
    <AppElement darkMode={isDarkMode}>
      <Router>
        <SectionContainer>
          <SectionTitle style={{ textAlign: 'right' }}>Mode</SectionTitle>
          <ToggleContainer>
            <Toggle
              // label='Mode'

              defaultChecked={false}
              onText='Dark'
              offText='Light'
              onChange={toggleMode}
            />
          </ToggleContainer>
        </SectionContainer>
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
  );
}

const StoreProvidedAndErrorBoundedApp = () => (
  <SimpleErrorBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </SimpleErrorBoundary>
);

export default StoreProvidedAndErrorBoundedApp;
