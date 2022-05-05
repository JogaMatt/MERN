import React, { Component } from 'react'

export default class PersonCard extends Component {
  render() {
    const {firstName, lastName, age, hairColor} = this.props;
    return (
      <fieldset>
          <h1>Name: {lastName}, {firstName}</h1>
          <p>Age: {age}</p>
          <p>Hair Color: {hairColor}</p>
      </fieldset>
    )
  }
}
