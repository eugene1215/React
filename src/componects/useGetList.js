import React, { useEffect, useState } from "react";
import StyleSheet from "../Style/Style.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function useGetList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var [Restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8081/allRest`);
      if (!response.ok) {
        setIsLoaded(true);
        const message = `An error has occurred: ${response.statusText}`;
        setError(message);
        window.alert(message);
        return;
      }
      Restaurants = await response.json();
      setRestaurants(Restaurants);
    }
    fetchData();
    setIsLoaded(true);
    return;
  }, [Restaurants.length]);

  function getAllList() {
    return Restaurants.map((rest) => {
      return (
        <div className="card" >
          <div class="card-body">
            <div key={rest.restId}>
              <h5 class="card-title"> Name: {rest.restName} </h5>{" "}
              <p class="card-text"> Description: {rest.restDescription} </p>{" "}
              <p class="card-text"> Rate: {rest.restRate} </p>{" "}
              <a href={rest.restId + "/detail"}   class="btn btn-primary" setRestaurants = {setRestaurants}>
                {" "}
                Detail{" "}
              </a>{" "}
            {/* <Link to={rest.restId + "/detail" }>Modus Create</Link> */}
            </div>{" "}
          </div>
        </div>
      );
    });
  }
  if (error) {
    return <div> ERROR: {error.message} </div>;
  } else if (!isLoaded) {
    return <div> Loading </div>;
  } else {
    return (
      <div className="body">
        <h1> All Restaurant Info:</h1>
        {getAllList()}
      </div>
    );
  }
}
