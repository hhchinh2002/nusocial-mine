import React, {useState} from "react";
import "./sideBar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SideBarChat from './SideBarChat';

function SideBar({currChat, childToParent, socket}) {
  const [chats, setChats] = useState([])
  const [chat, setChat]= useState("")
  const joinChat =  () => {
    if (currChat !== "") {
      socket.emit("join_room", currChat);
    }
  };
  return (
    <div className="sidebar" >
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar-searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" onChange={(event) => {
              setChat(event.target.value)
            }} onKeyPress = {e=>  {
             if(e.key === 'Enter'){
              currChat = chat
    setChats((list) => [...list, chat] )
    setChat("")
    childToParent(currChat)
   joinChat();
  }
          } }/>
        </div>
      </div>
      <div className="sidebar_chats">
      {
        chats.map(chat => {
           return (
          <SideBarChat  chatName = {chat}/>
           )
        })
    }
      </div>
  
    </div>
  );
}

export default SideBar;
