import React from "react";
import style from "./GuessInstructions.module.css";
import { Stack } from "react-bootstrap";

function GuessInstructions() {
  const name = `Hi, I'm Gabe. Let's play a game!`;
  const number = `I am thinking of a number between 1 and 100.`;
  const guess = `Go ahead and take a guess. If your guess is incorrect, I'll give you a hint. Also, I'll track how many guesses it takes to get the lucky number.`;

  return (
    <Stack gap={1} className={style.intro}>
      <h1 className={style.name}>{name}</h1>
      <h3 className={style.number}>{number}</h3>
      <p className={style.guess}>{guess}</p>
    </Stack>
  );
}
export default GuessInstructions;
