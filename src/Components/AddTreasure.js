import React, { Component } from 'react';

export default class AddTreasure extends Component {
  constructor() {
    super();
    this.state = {
      treasureURL: '',
    };
  }

<<<<<<< HEAD
    handleInput (e) {
        this.setState({treasureURL:e.target.value})
    }
    addTreasure () {
        // post to add treasure
=======
  handleInput(e) {
    this.setState({ treasureURL: e.target.value });
  }

  addTreasure() {
    // post to add treasure

>>>>>>> 8b83a479e4c39721046e42909d4b30c1bdfa5cd1
    }

  render() {
    return (
      <div className="addTreasure">
        <input type="text" placeholder="Add image URL" onChange={this.handleInput} value={this.state.treasureURL} />
        <button onClick={() => {}}>Add</button>
      </div>
    );
  }
}
