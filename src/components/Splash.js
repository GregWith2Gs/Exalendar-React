import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import {Navigate} from 'react-router-dom';
import '../css/Splash.css';


function Splash(){
      return (
    
    
    
        <div className="Splash text-center container-fluid">
          {!localStorage.loggedIn ? (
            <div>
    
          <h3>Welcome to Discord OAuth NodeJS App</h3>
          <p>Click on the below button to get started!</p>
          <a classname="Login-box"
              href="https://discord.com/oauth2/authorize?client_id=1217203680294469695&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&scope=email+identify"
          >
          Login with Discord</a>
      </div>
          ) : (
            <Navigate to='/ReactBigCalendar' />
          )}
        </div>
      );



} export default Splash;