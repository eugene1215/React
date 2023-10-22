import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import CustomNavbar from "./component/Navbar/CustomNavbar";
import routers from "./router/customRouter";
import Loader from "./component/Loader/Loader";
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById("root"));
const isLoading = true;



// export default function index(){

  // function useLoader() {
  //   const [isLoading, setIsLoading] = useState(true);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2700);
  //   }, []);
  
  //   return (<></>)
  // }

  root.render(
    <>
      {/* <useLoader /> */}
      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <>
          <React.StrictMode>
            <CustomNavbar />
            <RouterProvider router={routers} />
            <App />
          </React.StrictMode>
        </>
      {/* )} */}
    </>
  );
  // serviceWorker.unregister();
// }


