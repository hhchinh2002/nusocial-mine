
import React from 'react'
import "./NewsAndNots.css"
import Header from '../../components/Header/Header';
import { useLocation } from 'react-router-dom'; 


const NewsAndNots = () => {
  const location = useLocation();
  return (
    <div >
      <Header title = "News and Notifications" showHeaderCenter={true} showHeaderRight={true} link = "/home" username = {location.state.username}/>
      <div className = "homeBody">
    </div>
    </div>
  )
}

export default NewsAndNots;
