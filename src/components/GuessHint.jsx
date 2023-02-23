import React from "react";
import style from "./GuessHint.module.css";

function GuessHint({ currentGuess, luckyNumber }) {
  if (currentGuess < luckyNumber) {
    return (
      <div className={style.hint}>
        {" "}
        Nice Try, but I am thinking of a number that is{" "}
        <span className={style.bold}>higher</span> than{" "}
        <span className={style.bold}>{currentGuess}</span>.
      </div>
    );
  } else if (currentGuess > luckyNumber) {
    return (
      <div className={style.hint}>
        Nice Try, but I am thinking of a number that is{" "}
        <span className={style.bold}>lower</span> than{" "}
        <span className={style.bold}>{currentGuess}</span>.
      </div>
    );
  } else if (currentGuess === luckyNumber) {
    return (
      <div className={style.hint}>
        {" "}
        <span className={style.bold}>Congratulations!</span> You correctly
        guessed the lucky number is{" "}
        <span className={style.bold}>{luckyNumber}</span>.
      </div>
    );
  } else {
    return (
      <div className={style.hidden}>
        {" "}
        Nice Try, but I am thinking of a number that is higher than XX.
      </div>
    );
  }
}

export default GuessHint;
