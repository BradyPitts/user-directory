import React, {Component} from 'react';
import Main from './Componenets/Main/Main';
import './App.css';

class App extends Component {
  constructor(){
    super();
  }



  render(){
    return (
      <div className="App">
        <header>
          <h2>Home</h2>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
