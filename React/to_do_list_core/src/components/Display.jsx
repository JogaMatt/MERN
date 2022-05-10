import React, {useState} from 'react'
import './display.css'

const Display = (props) => {
// DESTRUCTURE chores FROM PROPS
  const {chores} = props

  return (
    <fieldset>
        <h4>To-Do List</h4>
        <div className="choreBody">
            {
                chores.map((chore, index) => {
                    return(
                        <div
                            key={index}
                            className='choreList'>
                            <p className='chore'>
                                {chore}
                            </p>
                            {/* <input onChange={(e) => setComplete(e.target.checked)} type="checkbox" className='checkbox'/> */}
                        </div>
                    )
                })
            }
        </div>
    </fieldset>
  )
}

export default Display