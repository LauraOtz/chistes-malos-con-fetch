import React, { useState } from "react";
import "./App.css";

const Joke = () => {
  const [joke, setJokes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setJokes([data.joke]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Bad Jokes 🕶</h1>

          {joke.map((j, index) => (
            <div className="data mt-3" key={index}>
              {j}
            </div>
          ))}

          <button className="btn mt-3" onClick={fetchData}>
            Laugh again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Joke;
