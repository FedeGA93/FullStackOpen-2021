import React, { useState } from "react";
import { Statistics } from "../Statistics/Statistics";
import { Button } from "./Button";

export const Content = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClickGood = () => {
    setGood(good + 1);
  };
  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleClickBad = () => {
    setBad(bad + 1);

  };
  return (
    <div>
      <Button name={"Good"} handleClick={handleClickGood} />
      <Button name={"Neutral"} handleClick={handleClickNeutral} />
      <Button name={"Bad"} handleClick={handleClickBad} />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
