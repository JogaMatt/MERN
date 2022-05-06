import React from 'react'

const PersonCard = (props) => {
  return (
    <fieldset>
          <h1>Name: {props.lastName}, {props.firstName}</h1>
          <p>Age: {props.age}</p>
          <p>Hair Color: {props.hairColor}</p>
      </fieldset>
  )
}

export default PersonCard
