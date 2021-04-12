import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";
import "./Game.css";
const styles = {
  width: "200px",
  margin: "20px auto",
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button className="btn-start" onClick={() => setBoard(Array(9).fill(null))}>
      {winner ? "Restart Game" : "Start Game"}
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={styles}>
        <p className="nxt">
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        <div className="btn-div"> {renderMoves()}</div>
      </div>
      <div className="winner__an">
        {winner ? `🎉 Wooho!!! Player ${winner} Won !!!🎉` : null}
      </div>
    </>
  );
};

export default Game;
