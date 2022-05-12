import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
        <Link to='/'>Home</Link> |
        <Link to='/dashboard'> Dashboard |</Link>
        <Link to='/recipes/new'> Create</Link>
      </>
    
  )
}

export default Navbar