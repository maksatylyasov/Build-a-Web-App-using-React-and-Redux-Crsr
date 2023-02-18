import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
   }
    
  }
  handleInput(event)  {
    var text = this.state.text;
    text = event.target.value;
    this.setState({ text: text });
  };

  handleClick() {
    this.props.onAddClick(this.state.text);
 }
 

  
  render() {
    return (
      <div className="search-form">
       <form>
        <input onChange={this.handleInput.bind(this)}  />  
        <button onClick={this.handleClick.bind(this)}>Search</button>
        </form>
        
      </div>
    );
  }

}
export default Search;