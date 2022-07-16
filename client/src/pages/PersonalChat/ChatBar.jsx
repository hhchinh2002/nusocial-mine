import React, {useEffect, useState} from 'react'
import './chatBar.css'
import { Avatar, IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined
} from "@mui/icons-material";
import Picker from "emoji-picker-react"
import Draggable from "react-draggable"


const clickedMenu = () => {
  console.log("clicked menu")
}

 const ChatBar = ({socket, username, chat }) => {

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [input, setInput] =  useState("");
  const [inputs, setInputs] = useState([]);
  const [showPicker, setShowPicker] = useState(false);

  const sendMessage = async() => {
    if (input !== "") {
      const messageData = {
        chat: chat,
        author: username,
        message: input,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setInputs((list) => [...list, messageData]);
      setInput("");
    }
  }
  

const onEmojiClick = (event, emojiObj) => {
  setInput(prevInput => prevInput + emojiObj.emoji);
  setShowPicker(false);
}
    useEffect(() => {
      socket.on("receive_message", (data) => {
        setInputs((list) => [...list, data]);
      });
    }, [socket]);



  return (
    <div className = "chat">
    <div className = "chat_header">
    <Avatar src = "https://avatars.dicebear.com/api/micah/frend.svg" />
    
    <div className = "chat_headerInfo">
        <h3>{chat}</h3>
        <p>Online/Offline</p>
    </div>

    <div className ="chat_headerRight">
    <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
    </div>
    </div>

    <div className = "chat_body">
    {
        inputs.map((msg) => {
           return (
            <div 
            className = {username === msg.author? "message":"message_other"}
            >
             <span className = "chat_name">{msg.author}</span>
    {msg.message}
    <span className = "chat_timeStamp">
        {msg.time}
    </span>
            </div>
           )
        })
    }
    
    </div>

    <div className = "chat_footer">
    <Draggable>
    <div className = "emoji_picker">
     <InsertEmoticon fontSize = "large" onClick = {() => setShowPicker(val => !val)} />
     {showPicker && <Picker onEmojiClick={ onEmojiClick} /> }
     </div>
     </Draggable>
 
    <input 
    type = "text"
    placeholder = "Type a message" 
    value = {input}
     
    onChange={(event) => {
            setInput(event.target.value);
          }}
      onKeyPress = { (event) => {
      event.key === 'Enter' && sendMessage();  
    }}
    /> 
   
     <Mic />
    </div>
    <div className= "contextMenu">
      {show ? (
        <ul
          className="menu"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x
          }}
          >
          <li onClick = {clickedMenu}>Share to..</li>
          <li>Cut</li>
          <li>Copy</li>
          <li>Paste</li>
          <hr className="divider" />
          <li>Refresh</li>
          <li>Exit</li>
        </ul>
        ) : (
        <> </>)}</div>
    </div>
  )
}

export default ChatBar;
