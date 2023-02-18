
import React, { Component } from "react"
import Census from './components/Census';
import Search from './components/Search';
import { connect } from 'react-redux'
import { search } from './actions/actions'


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: ""
    };

  }

  render() {
    const { dispatch, statename} = this.props;
    return (
      <div>
        <h1> State Census Data for {statename} </h1>
        <Search  />
        <Census name="" />

      </div>


    );
  }

}

// maps the state name in text to statename prop.

// Key: connect using the function to map state text to statename prop.
export default App;
