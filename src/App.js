// import Restaurants from '../src/componects/getAllRest';
import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./Screen/Index";
import Navbar from "./componects/navbar";
import CreateRest from "./componects/useCreateRest"
import { hot } from 'react-hot-loader/root';
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */}
        <Route path="/createFrom" element={<CreateRest />} />
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
  
 export default hot(AppWrapper);