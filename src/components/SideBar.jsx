import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import User from './User'

const SideBar = () => {
  return (
    <div className='sidebar'> 
      <Navbar/>
      <Search/>
      <User/>
      <User/>
      <User/>
      <User/>
    </div>
  )
}

export default SideBar