// import Restaurants from '../src/componects/getAllRest';
import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./componects/getAllRest";
import Navbar from "./componects/navbar";
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */}
        {/* <Route path="/create" element={<Create />} /> */}
      </Routes>
    </div>
  );
 };

 const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};
  
 export default AppWrapper;