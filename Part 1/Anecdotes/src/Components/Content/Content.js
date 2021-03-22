import React, { useState } from "react";
import { Button } from "./Button";
import { Title } from "../Title/Title";
import { Anecdotes } from "../Anecdotes/Anecdotes";

export const Content = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const points = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(points);
  const [mostVotes, setMostVotes] = useState(0);

  const randomNumber = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const handleAnecdotes = () => {
    let current = randomNumber();
    while (current === selected) {
      current = randomNumber();
    }
    setSelected(current);
  };
  const addVote = () => {
    setVotes({
      ...votes,
      [selected]: votes[selected] + 1,
    });

    if (votes[selected] >= votes[mostVotes]) {
      setMostVotes(selected);
      console.log(mostVotes)
    }
  };

  return (
    <div>
      <Title name={"Anecdotes of the day"} />
      <Anecdotes text={anecdotes[selected]} votes={votes[selected]} />
      <Button name={"Vote"} handleClick={addVote} />
      <Button name={"Next anecdote"} handleClick={handleAnecdotes} />
      <Title name={"Anecdote with the most Votes"} />
      {votes[mostVotes] >  0 && (
        <Anecdotes text={anecdotes[mostVotes]} votes={votes[mostVotes]} />
      )}
    </div>
  );
};
