import React, { Component } from 'react';
import FirstComponent from './components/examples/FirstComponent'
import SecondComponent from './components/examples/SecondComponet'
import ThirdComponent from './components/examples/ThirdComponent'
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
 
class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}
export default App;