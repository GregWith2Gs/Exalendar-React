import { useEffect, useState } from "react";
import axios from "axios";
import React from 'react';
import {Navigate} from 'react-router-dom';


function Splash(){
      return (
    
    
    
        <div className="App text-center container-fluid">
          {!localStorage.loggedIn ? (
            <div 
            style={{
            margin: '300px auto',
            'max-width': '400px',
            display: 'flex',
            'flex-direction': 'column',
            'align-items': 'center',
            'font-family': 'sans-serif',
            }}
        >
    
          <h3>Welcome to Discord OAuth NodeJS App</h3>
          <p>Click on the below button to get started!</p>
          <a 
              href="https://discord.com/oauth2/authorize?client_id=1217203680294469695&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fdiscord&scope=email+identify"
              style={{
                outline: 'none',
                padding: '10px',
                border: 'none',
                'font-size': '20px',
                'margin-top': '20px',
                'border-radius': '8px',
                background: '#6D81CD',
                cursor:'pointer',
                'text-decoration': 'none',
                color: 'white',
              }}
          >
          Login with Discord</a>
      </div>
          ) : (
            <Navigate to='/ReactBigCalendar' />
          )}
        </div>
      );



} export default Splash;