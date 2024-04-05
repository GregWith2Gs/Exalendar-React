import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactBigCalendar from './ReactBigCalendar.js';
import Login from './Login.js';
import Splash from './Splash.js';

const WebRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Splash />} />
      <Route path='/calendar' element={<ReactBigCalendar />} />
      <Route path='/auth/discord' element={<Login />}/>
    </Routes>
  );
}

export default WebRoutes;