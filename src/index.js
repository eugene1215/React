import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider} from 'react-router-dom'; 
import CustomNavbar from "./component/CustomNavbar";
import routers  from './router/customRouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CustomNavbar/>
    <RouterProvider router={routers} />
    <App />
  </React.StrictMode>
  
);

