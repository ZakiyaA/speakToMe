import React from 'react'
import Message from './Message'
import {IoIosAttach} from 'react-icons/io'

const Input = () => {
  return (
        <div className="type-area">
            <div className="form-group type-input">
                <input
                    type="text"
                    id="message"
                    placeholder="Type something..."
                    
                    onChange={(e) => console.log("Typing...")}
                />
            </div>
            <div className="send">
              <input type="file" name="upload" id="upload" 
              style={{display: 'none'}}
              />
              {/* <img src={''} alt=""  /> */}
              <IoIosAttach size={20}/>
              <button className='submit-message' type="submit">Send</button>
            </div>
        </div>
  )
}

export default Input;