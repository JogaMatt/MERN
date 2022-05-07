import React, { useState } from 'react'
import './Display.css'

const Display = (props) => {

  const {allColors} = props

  return (
    <fieldset id='display'>
        <legend>Display.jsx</legend>
        {
            allColors.map((color, index) => {
                return(
                    <div >
                        <div
                            key={index} 
                            style={{
                                backgroundColor: color,
                                width: 150,
                                height: 150,
                                marginBottom: 15}}
                            >
                        </div>
                    </div>
                )
            })
        }
    </fieldset>
  )
}

export default Display