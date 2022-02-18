// import Restaurants from '../src/componects/getAllRest';
import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./componects/useGetList";
import Navbar from "./componects/navbar";
import CreateRest from "./componects/useCreateRest"
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        {/* <Route path="/edit/:id" element={<Edit />} /> */}
        <Route path="/createRest" element={<CreateRest />} />
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