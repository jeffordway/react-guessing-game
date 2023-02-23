import React, { useState, useEffect } from "react";
import style from "./GuessForm.module.css";
import { Form, Button, Stack } from "react-bootstrap";
import GuessCount from "./GuessCount";

function GuessForm({ handleGuess, reset, numberOfGuesses, resetBtnTxt }) {
  const [currentGuess, setCurrentGuess] = useState("");

  useEffect(() => {
    setCurrentGuess("");
  }, [numberOfGuesses]);

  function handleSubmit(e) {
    e.preventDefault();
    handleGuess(currentGuess);
  }

  return (
    <Form onSubmit={handleSubmit} className={style.guessForm}>
      <Stack gap={3}>
        <Form.Control
          placeholder="Enter Your Guess"
          type="number"
          min="1"
          max="100"
          value={currentGuess}
          onChange={(e) => setCurrentGuess(parseInt(e.target.value))}
          name="guess"
          className={style.input}
        />
        <Stack direction="horizontal" gap={3} className={style.stack}>
          <Button className="" type="submit">
            Guess
          </Button>
          <Button variant="outline-secondary" onClick={reset}>
            {resetBtnTxt}
          </Button>
          <GuessCount numberOfGuesses={numberOfGuesses} />
        </Stack>
      </Stack>
    </Form>
  );
}

export default GuessForm;
