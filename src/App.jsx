import { useEffect, useState } from "react";
import style from "./App.module.css";
import { Col, Container, Row, Stack } from "react-bootstrap";
import GuessHost from "./components/GuessHost";
import GuessInstructions from "./components/GuessInstructions";
import GuessForm from "./components/GuessForm";
import GuessHint from "./components/GuessHint";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [luckyNumber, setLuckyNumber] = useLocalStorage("luckyNumber", 0);
  const [currentGuess, setCurrentGuess] = useState();
  const [numberOfGuesses, setNumberOfGuesses] = useLocalStorage(
    "numberOfGuesses",
    0
  );
  const [resetBtnTxt, setResetBtnTxt] = useState("Reset");

  useEffect(() => {
    if (luckyNumber === 0) {
      generateLuckyNumber();
    }
  }, []);

  function generateLuckyNumber() {
    const newLuckyNumber = Math.ceil(Math.random() * 100);
    setLuckyNumber(newLuckyNumber);
  }

  function handleGuess(guess) {
    setCurrentGuess(guess);
    setNumberOfGuesses((prevCount) => prevCount + 1);
    if (guess === luckyNumber) {
      setResetBtnTxt("Play Again");
    }
  }

  function handleReset() {
    generateLuckyNumber();
    setCurrentGuess();
    setNumberOfGuesses(0);
    setResetBtnTxt("Reset");
  }

  return (
    <>
      <Container className="my-5 py-5">
        <Row className={style.row}>
          <Col>
            <GuessHost />
          </Col>
          <Col>
            <Stack gap={5}>
              <GuessInstructions />
              <GuessForm
                handleGuess={handleGuess}
                reset={handleReset}
                numberOfGuesses={numberOfGuesses}
                resetBtnTxt={resetBtnTxt}
              />
              <GuessHint
                currentGuess={currentGuess}
                luckyNumber={luckyNumber}
              />
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
