import React from 'react'
import Avatar from 'react-avatar';
import {GoogleLogout} from 'react-google-login';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="right">
            <span>SpeakToMe</span>
        </div>
        <div className="left">
           <Avatar githubHandle="sitebase" size={30} round="20px" />
           <span className="name">John Norton</span>
           <button>Logout</button>
           {/* <GoogleLogout
                clientId="362330766465-q736t36mv02dgu00fd4lfqomt5j1l10g.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={() => {console.log("logout")}}
                >
            </GoogleLogout> */}
        </div>
    </div>
  )
}

export default Navbar