import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "../App.css";
import { Wheel } from "react-custom-roulette";

const data1 = [
  { option: "0", style: { backgroundColor: "green", textColor: "black" } },
  { option: "1", style: { backgroundColor: "white", textColor: "black" } },
  { option: "2", style: { backgroundColor: "red", textColor: "black" } },
];

const Foodie = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data1.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };
  //   const [data, setData] = useState(null);
  //   useEffect(() => {
  //     fetch(url)
  //       .then(response => response.json())
  //       .then(json => setData(json))
  //       .catch(error => console.error(error));
  //   }, []);

  return (
    <Container fluid="md" className="pageLayout">
      <h1>Foodie</h1>

      <>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data1}
          backgroundColors={["#3e3e3e", "#df3428"]}
          textColors={["#ffffff"]}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <button onClick={handleSpinClick}>SPIN</button>

        {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'} */}
      </>
    </Container>
  );
};

export default Foodie;
