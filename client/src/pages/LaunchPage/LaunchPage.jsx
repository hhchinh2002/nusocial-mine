import "./LaunchPage.css";
import React, { useState } from 'react';
import { ReactComponent as Lpimgregister } from './lpimg.svg';
import { ReactComponent as Lpimglogin } from './lpimglogin.svg';
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import EmailIcon from '@mui/icons-material/Email';
import {useRef, useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const LaunchPage = () => {
  const container = React.useRef(null);
  const handleSign = () => {
    container.current?.classList.toggle("registerMode");
  };

  const [regUsername, setRegUsername] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const register = () => {
    axios.post("https://nusocial-mine.herokuapp.com/register",
    {
      regUsername: regUsername,
      regPassword: regPassword,
      regEmail: regEmail,
    }).then((response) => {
      console.log(response);
    });
  };

  const [logUsername, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const login = () => {
    axios.post("https://nusocial-mine.herokuapp.com/login",
    {
      logUsername: logUsername,
      logPassword: logPassword,
    }).then((response) => {
      if (response.data.loggedIn) {
        localStorage.setItem("loggedIn", true);
        localStorage.setItem("username", response.data.username);
        navigate("/home");
        setErrorMessage("Loggin successfully!")
      } else {
        setErrorMessage(response.data.message);
      }
    });
  };

  return ( 
    <div className="container" ref={container}>
      <div className="formContainer">
        <div className="loginRegister">
          <div className="form loginForm">
            <h2 className="title">Login</h2>
            <div className="inputField">
              <PersonIcon className="icon"/>
              <input 
                type="text" 
                placeholder="Username" 
                onChange={(event) => {setLogUsername(event.target.value);}}
              />
            </div>
            <div className="inputField">
              <HttpsIcon className="icon"/>
              <input
                type="password"
                placeholder="Password" 
                onChange={(event) => {setLogPassword(event.target.value);}}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" onClick={login}/>
            {errorMessage}
            <p className="guest">Or continue as an anonymous guest</p>
          </div>
          <div className="form registerForm">
            <h2 className="title">Register</h2>
            <div className="inputField">
              <PersonIcon className="icon"/>
              <input 
                type="text" 
                placeholder="Username" 
                onChange={(event) => (setRegUsername(event.target.value))}/>
            </div>
            <div className="inputField">
              <EmailIcon className="icon"/>
              <input 
                type="email" 
                placeholder="Email" 
                onChange={(event) => (setRegEmail(event.target.value))}/>
            </div>
            <div className="inputField">
              <HttpsIcon className="icon"/>
              <input 
                type="password" 
                placeholder="Password" 
                onChange={(event) => (setRegPassword(event.target.value))}/>
            </div>
            <input type="submit" className="btn" onClick={register}/>
            
            <p className="guest">Or continue as an anonymous guest</p>
          </div>
        </div>
      </div>

      <div className="panelsContainer">
        <div className="panel leftPanel">
          <div className="content">
            <h3>What is NUSocial?</h3>
            <p>
              NUSocial is an all-in-one social media platform designed for
              National University of Singapore students providing a wide range
              of functions helping them to socialize, communicate, find a group
              of students with same hobbies, catch up with their studying schedules,
              submissions deadline,... Register an account to join with NUSocial community.
            </p>
            <p>
              Register an account to join with NUSocial community.
            </p>
            <button onClick={handleSign} className="btn transparent">
              Register
            </button>
          </div>
          <Lpimglogin className="image" alt="" />
        </div>
        <div className="panel rightPanel">
          <div className="content">
            <h3>Already have an account?</h3>
            <p>
              Login with your account here to communicate with your friends, people in NUS
            </p>
            <button onClick={handleSign} className="btn transparent">
              Login
            </button>
          </div>
          <Lpimgregister className="image" alt="" />
        </div>
      </div>
    </div>
  )
}