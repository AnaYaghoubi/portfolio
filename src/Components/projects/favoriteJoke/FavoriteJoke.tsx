import React, { useEffect, useState } from "react";
import "./FavoriteJoke.css";

interface Joke {
  id: string;
  joke: string;
  status: number;
}

const Jokes = () => {
  const [joke, setJoke] = useState("");
  const [favoriteJoke, setFavoriteJoke] = useState(
    localStorage.getItem("favoriteJoke") ?? ""
  );
  const loadJoke = async () => {
    let response = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });
    let joke: Joke = await response.json();
    setJoke(joke.joke);
  };

  const setFavorite = () => {
    setFavoriteJoke(joke);
  };

  useEffect(() => {
    localStorage.setItem("favoriteJoke", favoriteJoke);
  }, [favoriteJoke]);

  useEffect(() => {
    loadJoke();
  }, []);

  return (
    <>
      <div className="card">
        <b>Random joke:</b>
        <div>{joke}</div>
        <div>
          <button onClick={setFavorite}>Set favorite</button>
          <button onClick={loadJoke}>New Joke</button>
        </div>
      </div>

      {favoriteJoke && (
        <div className="card">
          <b>Heeft een favorite joke!</b>
          <div>{favoriteJoke}</div>
        </div>
      )}
    </>
  );
};

export default Jokes;
