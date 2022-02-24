// import Restaurants from '../src/componects/getAllRest';
import React, { useEffect, useState } from 'react';
import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";

import store from './Redux/store';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader/root';

import Index from "./Screen/Index";
import Navbar from "./componects/navbar";
import CreateRest from "./componects/useCreateRest"
import Detail from './Screen/Detail';



// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/:id/detail" element={<Detail />} />
        <Route path="/createFrom" element={<CreateRest />} />
      </Routes>
    </div>
  );
 };

 const AppWrapper = () => {
  return (
    <Provider store={store}>
    <Router>
      <App />
    </Router>
    </Provider>
  );
};
  
 export default hot(AppWrapper);