import React, { Component } from 'react'

export default class MyNewComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            position: "On"
        };
    }

    flipSwitch = () => {
        if (this.state.position === "On"){
            this.setState({position: "Off"});
        } else {
            this.setState({position: "On"});
        }
    }

  render() {
      
      const {position} = this.state;
    return (
      <fieldset>
          <p>The light is currently in the {position} position!</p>
          <button onClick={this.flipSwitch}>Flip Switch</button>
      </fieldset>
    )
  }
}
