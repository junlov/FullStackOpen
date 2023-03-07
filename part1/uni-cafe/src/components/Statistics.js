import React from "react";
import Button from "./Button";
import StatisticLine from "./StatisticLine";

export default function Statistics({ props }) {
  const { good, neutral, bad, handleGood, handleBad, handleNeutral } = props;

  const average = (good - bad) / 3;
  const positive = (good / (good + bad + average)) * 100;

  console.log("Statistics", handleGood);

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />

      <h1>Statistics</h1>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="All" value={good + neutral + bad} />
            <StatisticLine text="Average" value={average} />
            <StatisticLine text="Positive" value={positive} />
          </table>
        </>
      )}
    </>
  );
}
