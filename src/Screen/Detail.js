import React, { useState } from "react";
import RetriveDeatil from "../componects/useGetList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  


const Detail = () => {
    let { id } = useParams();
    return ( <div >

        {id}
        </div>
    );
};



export default Detail;