import React, { Component } from 'react';
import Layout from './components/Layout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    );
  }
}

export default App;
