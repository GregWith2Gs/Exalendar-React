import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactBigCalendar from './ReactBigCalendar.js';
import Login from './Login.js';

const WebRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<ReactBigCalendar />} />
      <Route path='/login' element={<Login />}/>
    </Routes>
  );
}

export default WebRoutes;