import React from "react";
import AnimalFactCard from "./components/AnimalFactCard";

import "./styles/index.css";

function App() {
  const [animal, setAnimal] = React.useState("cat");

  const genderChangeHandler = (event) => setAnimal(event.target.value);

  return (
    <>
      <select onChange={genderChangeHandler}>
        <option value="cat">Cat Fact</option>
        <option value="dog">Dog Fact</option>
      </select>
      <AnimalFactCard animal={animal} />
    </>
  );
}

export default App;

