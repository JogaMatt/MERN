import React, { Component } from 'react'

export default class PersonCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      age : this.props.age
    }
  }
  
  birthdayIncrease = () => {
    let {age} = this.state
    this.setState({
      'age' : ++age})
  }

  render() {
    const {firstName, lastName, hairColor} = this.props;
    return (
      <fieldset>
          <h1>Name: {lastName}, {firstName}</h1>
          <p>Age: {this.state.age}</p>
          <p>Hair Color: {hairColor}</p>
          <button onClick={this.birthdayIncrease}>Birthday Button for {firstName} {lastName}</button>
      </fieldset>
    )
  }
}
