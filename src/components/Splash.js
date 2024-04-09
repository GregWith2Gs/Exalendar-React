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
    
          <h3>Welcome to Exalendar's Discord OAuth!</h3>
          <p>Click on the below button to get started!</p>
          <a className="Login-box"
              href="/login/discord"
          >
          Login with Discord</a>
      </div>
          ) : (
            <Navigate to='/Calendar' />
          )}
        </div>
      );



} export default Splash;