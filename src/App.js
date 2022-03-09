import classes from "./App.module.css";
import { useState } from "react";

function App() {
  const [firstNumber, setFirstNumber] = useState("0");
  const [secondNumber, setSecondNumber] = useState("");
  const [isMinus, setIsMinus] = useState(false);
  const [isSecondNumber, setIsSecondNumber] = useState(false);
  const [arithmeticSign, setArithmeticSign] = useState("");

  const clearHandler = () => {
    if (isSecondNumber) {
      setSecondNumber("0");
    } else {
      setFirstNumber("0");
    }
  };

  const setNumberHandler = (num) => {
    setIsMinus(false);
    if (isSecondNumber) {
      console.log("second number");
      if (secondNumber === "0") {
        setSecondNumber(`${num}`);
      } else {
        setSecondNumber(`${secondNumber}${num}`);
      }
    } else {
      if (firstNumber === "0") {
        setFirstNumber(`${num}`);
      } else {
        setFirstNumber(`${firstNumber}${num}`);
      }
    }
  };

  const minusOrPlusHandler = () => {
    if (firstNumber !== "0" && !isSecondNumber) {
      setIsMinus(!isMinus);
      setFirstNumber(
        !isMinus ? `-${firstNumber}` : firstNumber.replace("-", "")
      );
      console.log(firstNumber);
    }
    if (secondNumber !== "0" && isSecondNumber && !secondNumber.includes("-")) {
      setIsMinus(!isMinus);
      setSecondNumber(
        !isMinus ? `-${secondNumber}` : secondNumber.replace("-", "")
      );
    }
  };

  const interestHandler = () => {
    if (isSecondNumber) {
      setSecondNumber(Number(secondNumber) / 100);
    } else {
      setFirstNumber(Number(firstNumber) / 100);
    }
  };

  const fractionHandler = () => {
    if (isSecondNumber) {
      if (!secondNumber.includes(".")) {
        setSecondNumber(`${secondNumber}.`);
      }
    } else {
      if (!firstNumber.includes(".")) {
        setFirstNumber(`${firstNumber}.`);
      }
    }
  };

  const divisionHandler = () => {
    setIsSecondNumber(true);
    setArithmeticSign("/");
  };

  const multiplicationHandler = () => {
    setIsSecondNumber(true);
    setArithmeticSign("*");
  };

  const plusHandler = () => {
    setIsSecondNumber(true);
    setArithmeticSign("+");
  };

  const minusHandler = () => {
    setIsSecondNumber(true);
    setArithmeticSign("-");
  };

  const equalHandler = () => {
    if (secondNumber) {
      if (arithmeticSign === "/") {
        console.log(firstNumber, secondNumber);
        setFirstNumber(Number(firstNumber) / Number(secondNumber));
      } else if (arithmeticSign === "+") {
        console.log(firstNumber, secondNumber);
        setFirstNumber(Number(firstNumber) + Number(secondNumber));
      } else if (arithmeticSign === "-") {
        console.log(firstNumber, secondNumber);
        setFirstNumber(Number(firstNumber) - Number(secondNumber));
      } else if (arithmeticSign === "*") {
        console.log(firstNumber, secondNumber);
        setFirstNumber(Number(firstNumber) * Number(secondNumber));
      }
      setSecondNumber("");
      setIsSecondNumber(false);
    }
  };

  return (
    <div className={classes.calculator}>
      <div className={classes.counter}>
        {secondNumber ? secondNumber : firstNumber}
      </div>
      <div className={classes.numbers}>
        <div className={classes.components}>
          <div className={classes.number} onClick={clearHandler}>
            <button>AC</button>
          </div>
          <div className={classes.number} onClick={minusOrPlusHandler}>
            <button> +/-</button>
          </div>
          <div className={classes.number} onClick={interestHandler}>
            <button>%</button>
          </div>
          <div className={classes.count} onClick={divisionHandler}>
            <button>÷</button>
          </div>
        </div>
        <div className={classes.components}>
          <div className={classes.number} onClick={() => setNumberHandler(7)}>
            <button>7</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(8)}>
            <button>8</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(9)}>
            <button>9</button>
          </div>
          <div className={classes.count} onClick={multiplicationHandler}>
            <button>x</button>
          </div>
        </div>
        <div className={classes.components}>
          <div className={classes.number} onClick={() => setNumberHandler(4)}>
            <button>4</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(5)}>
            <button>5</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(6)}>
            <button>6</button>
          </div>
          <div className={classes.count} onClick={minusHandler}>
            <button>-</button>
          </div>
        </div>

        <div className={classes.components}>
          <div className={classes.number} onClick={() => setNumberHandler(1)}>
            <button>1</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(2)}>
            <button>2</button>
          </div>
          <div className={classes.number} onClick={() => setNumberHandler(3)}>
            <button>3</button>
          </div>
          <div className={classes.count} onClick={plusHandler}>
            <button>+</button>
          </div>
        </div>
        <div className={classes.components}>
          <div className={classes.zero} onClick={() => setNumberHandler(0)}>
            <button>0</button>
          </div>
          <div className={classes.number} onClick={fractionHandler}>
            <button>.</button>
          </div>
          <div className={classes.count} onClick={equalHandler}>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
