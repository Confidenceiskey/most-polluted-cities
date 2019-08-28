import React, { Component } from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import EarthBackground from '../components/EarthBackground';
import MainContent from '../components/MainContent';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <EarthBackground />
        <MainContent />
      </React.Fragment>
    );
  }
}

export default App;
