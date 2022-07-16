import React, {useState} from "react"
import './personalChat.css'
import SideBar from './SideBar'
import ChatBar from './ChatBar'
import Header from '../../components/Header/Header'
import io from "socket.io-client"
import { useLocation } from 'react-router-dom'

//SideBar contains contacts 
// ChatBar shows chat history and section to write and send message
// Header is by default shown on top to allow navigation to other pages
 const PersonalChat = ({username}) => {

  const socket = io.connect("https://nusocial-mine.herokuapp.com/");
  const [currChat, setCurrChat] = useState('');

  const location = useLocation();
  const childToParent = (childdata) => {
    setCurrChat(childdata);
  }
  return (
    
    <div className = "PersonalChat">
    <div className = "personalchat">
  <Header title = "Chat"  showHeaderCenter={true} showHeaderRight = {true} link = "/home"/>
    <div className = "personalchat_body">
      <SideBar socket = {socket} currChat = {currChat} childToParent={childToParent} />
      <ChatBar socket = {socket} username = {location.state.username} chat = {currChat.toString()}  />
      </div>
      </div>
    </div>
  )
}

export default PersonalChat
