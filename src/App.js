import React from "react";
import "./App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div className="heading">
        <h1>Tic Tac Toe</h1>
      </div>
      <Game />
    </>
  );
}

export default App;
