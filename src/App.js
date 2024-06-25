import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    name: "Random",
    age: 26,
    msg: "Hey, How are you...!!",
  });

  const handleClick = () => {
    setValue((prevState) => ({
      ...prevState,
      name: "Muhammad Daim",
    }));
  };

  return (
    <div className="container">
      <div className="card">
        <p>Name : {value.name}</p>
        <p>Age : {value.age}</p>
        <p>Message : {value.msg}</p>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
