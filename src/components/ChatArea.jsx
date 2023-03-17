import React from 'react'
import { GoDeviceCameraVideo } from 'react-icons/go';
import { BsFillPersonFill } from 'react-icons/bs'; 
import { BsThreeDots } from 'react-icons/bs';
import MessageLists from './MessageLists';
import Input from './Input';

const ChatArea = () => {
  return (
    < div className='chat'>
    <div className='chat-info'>
      <span style={{color:'white'}}>Tyler</span>
      <div className='chat-icons'>
        <GoDeviceCameraVideo/>
        <BsFillPersonFill/>
        <BsThreeDots/>
      </div>
    </div>
    
      <MessageLists/>
      <Input/>
     
    
    </div>
  )
}

export default ChatArea