/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

import styled from 'styled-components';

const AppElement = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: lightblue;
  min-height: 100vh;
`;

function App() {
  return <AppElement>And here is our APP element</AppElement>;
}

export default App;
