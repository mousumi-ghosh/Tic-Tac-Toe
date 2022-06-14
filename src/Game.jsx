import React from "react";
import { useEffect, useState } from "react";
import Squer from "./Squer";
import PopUpWinner from "./PopUpWinner"
import "./App.css";

const Game = () => {
  const [gameState, setGameState] = useState( "","","","","","","","","");
  const [chance, setChance] = useState(false);
  const [name, setName] = useState(null);
  const onSquerClick = (index) => {
    let string = Array.from(gameState);
    string[index] = chance ? "x" : "o";
    setGameState(string);
    setChance(!chance);
  };
  useEffect(() => {
    const winner = checkWinner();
    if (winner) {
      setName(winner);
      setGameState("");
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState]);
  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return gameState[a];
      }
    }
    return null;
  };
  return (
    <>
    <div>

      <h1 className="text">Tic-Tac-Toe</h1>
      <div> 
      { name == null ? null : <PopUpWinner name={name}/> }
     </div>
      <div className="row jc-center">
        <Squer
          className="b-bottom-right"
          state={gameState[0]}
          onClick={() => onSquerClick(0)}
        />
        <Squer
          className="b-bottom-right"
          state={gameState[1]}
          onClick={() => onSquerClick(1)}
        />
        <Squer
          className="b-bottom"
          state={gameState[2]}
          onClick={() => onSquerClick(2)}
        />
      </div>
      <div className="row jc-center">
        <Squer
          className="b-bottom-right"
          state={gameState[3]}
          onClick={() => onSquerClick(3)}
        />
        <Squer
          className="b-bottom-right"
          state={gameState[4]}
          onClick={() => onSquerClick(4)}
        />
        <Squer
          className="b-bottom"
          state={gameState[5]}
          onClick={() => onSquerClick(5)}
        />
      </div>
      <div className="row jc-center">
        <Squer
          className="b-right"
          state={gameState[6]}
          onClick={() => onSquerClick(6)}
        />
        <Squer
          className="b-right"
          state={gameState[7]}
          onClick={() => onSquerClick(7)}
        />
        <Squer state={gameState[8]} onClick={() => onSquerClick(8)} />
      </div>
      <button className="btn" onClick={() => {setGameState("");setName(null)}}>
        Reset
      </button>
      <div className="footer">
      &#169;2022 | Made with ❤️ by Mousumi.
      </div>
    </div>
    </>
  );
};

export default Game;
