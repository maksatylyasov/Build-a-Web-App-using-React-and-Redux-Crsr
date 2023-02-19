import React, { Component } from "react";
import Census from "./components/Census";
import Search from "./components/Search";
import { connect } from "react-redux";
import { search } from "./actions/actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  render() {
    const { dispatch, region } = this.props;
    return (
      <div>
        <h1> State Census Data for {region} </h1>
        <Search onAddClick={(text) => dispatch(search(text))} />
        <Census name={region} />
      </div>
    );
  }
}

// maps the state name in text to statename prop.
function select(state) {
  return { region: state.text };
}

// Key: connect using the function to map state text to statename prop.
export default connect(select)(App);
