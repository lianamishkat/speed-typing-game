import React, { useState, useEffect, useRef } from "react";
import useWordGame from "./useWordGame";

function App() {
  const {
    textBoxRef,
    handleChange,
    text,
    isTimeRunning,
    timeRemaining,
    startGame,
    wordCount
  } = useWordGame(15);

  return (
    <div className="container">
      <h2>
        <span>speed typing game</span>
      </h2>
      <textarea
        onChange={handleChange}
        value={text}
        disabled={!isTimeRunning}
        ref={textBoxRef}
      />
      <h3>time remaining: {timeRemaining}</h3>
      <button onClick={startGame} disabled={isTimeRunning}>
        start game
      </button>
      <h3>word count: {wordCount}</h3>
    </div>
  );
}

export default App;
