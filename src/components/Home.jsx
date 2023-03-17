import React from 'react'
import ChatArea from './ChatArea'
import SideBar from './SideBar'

const Home = () => {
  return (
    <div className='home-page'>
        <div className="container">
            <SideBar />
            <ChatArea />
        </div>
     
    </div>
  );
};

export default Home