import React from "react";
import style from "./GuessCount.module.css";

function GuessCount({ numberOfGuesses }) {
  if (numberOfGuesses === 1) {
    return (
      <p className={style.message}>
        You have made{" "}
        <span className={style.totalCount}>{numberOfGuesses}</span> guess.
      </p>
    );
  }
  return (
    <p className={style.message}>
      You have made <span className={style.totalCount}>{numberOfGuesses}</span>{" "}
      guesses.
    </p>
  );
}

export default GuessCount;
