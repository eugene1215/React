import React, { useEffect, useState } from 'react'

export default function useGetList () {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  var [Restaurants, setRestaurants] = useState([]);

useEffect(() => {
   async function fetchData(){
    const response = await fetch(`http://127.0.0.1:8081/allRest`);
    
    if (!response.ok) {
      setIsLoaded(true);
      const message = `An error has occurred: ${response.statusText}`;
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

function getAllList(){
  return Restaurants.map((rest) => {
    return(
      <div key={rest.restId}>
        Name: {rest.restName}
        Description: {rest.restDescription}
        Rate: {rest.restRate}
      </div>
    )
  })
}


if(error) {
  return <div>ERROR: {error.message}</div>;
}

else if (!isLoaded){
  return <div>Loading</div>
}
else {
  return (
  
  <div>
    <h1>All Restaurant Info:</h1>
 
    {getAllList()}
  </div>);
}
};
