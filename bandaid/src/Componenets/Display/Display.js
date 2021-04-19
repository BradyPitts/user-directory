import React, {Component} from 'react';
import './Display.css';

class Display extends Component {
  constructor(props){
    super(props);
  }



  render(){ let favMovs =
    this.props.data.favoriteMovies.map((ndx, key) => {
      return <li>{ndx}</li>
    });
    return (
      <div>
        <h3>{this.props.viewing+1}/25</h3>
        <h2>{this.props.data.name.first} {this.props.data.name.last}</h2>
        <p><b>From:</b> {this.props.data.city}, {this.props.data.country}</p>
        <p><b>Job Title:</b> {this.props.data.title}</p>
        <p><b>Employer:</b> {this.props.data.employer}</p>
        <br />
        <p><b>Favorite Movies:</b> <ol>{favMovs}</ol></p>
      </div>
    );
  }
}

export default Display;