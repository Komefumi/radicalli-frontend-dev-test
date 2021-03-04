import React from 'react';
import styled from 'styled-components';

const FullPageOverlay = styled.section`
  background-color: #f4a073;
  min-height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;
  padding: 3em;

  @media (max-width: 705px) {
    padding: 0;
  }
`;

const ErrorMessageSection = styled.section`
  padding: 3em 4em;
  background-color: #cd481a;
  font-size: 2em;
  color: #efefef;
  min-height: 80vh;
  word-wrap: break-word;
  @media (max-width: 705px) {
    padding: 1em;
    font-size: 1em;
    min-height: none;
  }
`;

class SimpleErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error });
    console.log({ errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <FullPageOverlay>
          <ErrorMessageSection>
            Oh no, an error has occured. Check the console for browser details.
          </ErrorMessageSection>
        </FullPageOverlay>
      );
    }
    return this.props.children;
  }
}

export default SimpleErrorBoundary;
