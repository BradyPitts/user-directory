import React, {Component} from 'react';
import Display from '../Display/Display';
import data from '../../data';
import './Main.css';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      viewing: 0,
    }
  }

  previous = () =>{
    this.setState({viewing: this.state.viewing-1})
  }

  next = () =>{
    this.setState({viewing: this.state.viewing+1})
  }


  render(){
    return (
      <main>
        <Display viewing={this.state.viewing} data={data[this.state.viewing]}/>
        {/* <h1>{this.state.viewing}</h1> */}
        <button class='nav' onClick={this.previous}>Previous</button>
        <button class='edn'>Edit</button>
        <button class='edn'>Delete</button>
        <button class='edn'>New</button>
        <button class='nav' onClick={this.next}>Next</button>
      </main>
    );
  }
}

export default Main;