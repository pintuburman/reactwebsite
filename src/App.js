import './App.css';
import React, { Component } from 'react';
import NotFound from './components/global/NotFound';
import Main from './components/global/Main';

export default class App extends Component {
  render() {

    let mainComponent = '';
    switch (this.props.location) {
      case "":
        mainComponent = <Main {...this.props} />;
        break;

      default:
        mainComponent = <NotFound />;
    }

    return (
      <div className="App">
        {mainComponent}
      </div>
    );
  }

}
