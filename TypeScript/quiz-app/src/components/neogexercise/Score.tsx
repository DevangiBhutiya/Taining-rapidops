import React from "react";

interface ScoreProp{
    currentScore: number
    totalScore: number
}
const Score = ({currentScore, totalScore}: ScoreProp) => {
  return (
    <div>
      <h1>Score component</h1>
      <p>Score: {currentScore}/{totalScore}</p>
    </div>
  );
};

export default Score;
