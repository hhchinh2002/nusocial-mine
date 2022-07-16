import React, {useState} from 'react';
import './header.css';
import { Chat, Home, Notifications, Search } from "@mui/icons-material";
import { Avatar } from '@mui/material';
import Logo from "../Logo/Logo";
import DoubleArrowTwoToneIcon from '@mui/icons-material/DoubleArrowTwoTone';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import { Person } from '@mui/icons-material';
import { useEffect } from 'react';

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);
  
  return (
    <div className="header">
      <div className="headerLeft">
        <Logo/>
        </div>
      <div className="headerCenter">
        <div className="searchBar">
          <Search style={{marginLeft: "20px", fontSize: "25px"}}/>
          <input 
            placeHolder="search for modules, friends,..." 
            className="searchInput"
          />
        </div>
      </div>
      <div className="headerRight">
        <div className="headerIcon">
          <div className="iconItem">
            <Home fontSize='large' htmlColor='#1f3d85'/>
          </div>
          <div className="iconItem">
            <Notifications fontSize='large' htmlColor='#1f3d85'/>
            <span className="iconBadge">4</span>
          </div>
          <div className="iconItem">
            <Chat fontSize='large' htmlColor='#1f3d85'/>
            <span className="iconBadge">3</span>
          </div>
        </div>
        <Avatar src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/ec/83/3a/ec833a37-1e6f-958e-9e60-4f358795405f/source/512x512bb.jpg">3</Avatar>
      </div>    
    </div>
  )
}

export default Header
