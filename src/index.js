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
// var nodemailer = require('nodemailer');

const root = ReactDOM.createRoot(document.getElementById("root"));
const isLoading = true;


// function sendMail(){
//   // const recipient = 'tempgene0@gmail.com';
//   // const subject = document.getElementById("senderSubject").value ;
//   // const body = document.getElementById("mailBody").value ;


//   var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'youremail@gmail.com',
//       pass: 'yourpassword'
//     }
//   });
  
//   var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });

//   // const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// // window.location.href = mailtoLink;

// }




// var results = document.getElementById("activity_level").value + "</br>" +
//               document.getElementById("target_bodyfat_pct").value + 
//               document.getElementById("tw").value + "</br>";

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
            {/* <CustomNavbar /> */}
            <RouterProvider router={routers} />
            <App />
          </React.StrictMode>
        </>
      {/* )} */}
    </>
  );
  // serviceWorker.unregister();
// }


