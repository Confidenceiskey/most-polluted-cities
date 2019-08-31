import React, { Component } from 'react';
import GlobalStyle from '../styles/GlobalStyles';
import EarthBackground from '../components/EarthBackground';
import MainContent from '../components/MainContent';
import ScrollWindow from '../styles/ScrollWindow';

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
        <ScrollWindow>
          <MainContent />
        </ScrollWindow>
      </React.Fragment>
    );
  }
}

export default App;
