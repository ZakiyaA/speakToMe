import React from 'react'
import Avatar from 'react-avatar';

const user = () => {
  return (
    <div className='user'>
       <Avatar githubHandle="sitebase" size={50} round="20px" />
       <div>
       <p className="name">John Norton</p>
       <p className="message">hello</p>
       </div>
       
       </div>
  )
}

export default user