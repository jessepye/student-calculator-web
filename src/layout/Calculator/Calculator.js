import React, { useState } from 'react';
import Confetti from 'react-confetti';
// import Reward from 'react-rewards';
import { evaluate } from 'mathjs';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

function Calculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('0');
  // const approxPrompt = '(Enter an approximation)';
  const [approximation, setApproximation] = useState('');
  const [incorrectClassFlag, setIncorrectClassFlag] = useState(false);
  const [confettiFlag, setConfettiFlag] = useState(false)
  /*
    Mode can be one of these strings:
    EnterintEquation
    EnteringApproximation
    Finished
  */
  const [mode, setMode] = useState('EnteringEquation');

  const setCurrentScreen = (s) => {
    if(mode==='EnteringEquation') {
      setEquation(s);
    } else if (mode === 'EnteringApproximation') {
      let lastChar = s[s.length-1];
      if(s.length === 0 || (lastChar >= '0' && lastChar <= '9') || lastChar === '.') {
        setApproximation(s);
      }
    } else if (mode === 'Finished') {
      setEquation(s);
    }
  };

  const getCurrentScreen = () => {
    if(mode==='EnteringEquation') {
      return equation;
    } else if (mode === 'EnteringApproximation') {
      return approximation;
    } else if (mode === 'Finished') {
      return equation;
    }
  };

  const appendCurrentScreen = (s) => {
    setCurrentScreen(getCurrentScreen() + s);
  };

  const approximationIsCloseEnough = () => {
    let equationResult = evaluate(equation.replace('×', '*'));
    let diff = Math.abs(parseFloat(approximation) - equationResult);
    console.log('diff:', diff);
    if (diff <= 1) {
      return true;
    }
    let diffProportion = Math.abs(diff/equationResult);
    console.log('diffProportion:', diffProportion);
    if(diffProportion <= 0.5) {
      return true;
    }

    return false;
  };

  const onButtonPress = event => {
    const pressedButton = event.target.innerHTML;
    if (pressedButton === 'C') {
      if (mode === "Finished") {
        setMode("EnteringEquation");
        setEquation('');
        setResult(0);
        setApproximation('');
      } else {
        // Allow the user to 'exit' the approximation mode by clicking C twice
        if (mode === "EnteringApproximation" && approximation === '') {
          setMode("EnteringEquation");
        } else {
          setCurrentScreen('');
        }
      }
    }
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
      if (mode === "Finished") { // we just finished a calculation, start a new one
        setMode("EnteringEquation");
        setEquation(pressedButton);
        setResult(0);
        setApproximation('');
      } else {
        appendCurrentScreen(pressedButton);
      }
    }
    else if (['+', '-', '*', '×', '/', '%'].indexOf(pressedButton) !== -1) {
      if (mode === "Finished") {
        setMode("EnteringEquation");
        setEquation(result + ' ' + pressedButton + ' ');
        setResult(0);
        setApproximation('');
      } else {
        appendCurrentScreen(' ' + pressedButton + ' ');
      }
    }
    else if (pressedButton === 'Enter') {
      // this.reward.rewardMe();
      if (mode === 'EnteringEquation') {
        setMode('EnteringApproximation');
        setApproximation('');
      } else if (mode === 'EnteringApproximation') {
        let equationResult;
        try {
          equationResult = evaluate(equation.replace('×', '*'));
        } catch (error) {
          alert('Invalid Mathematical Equation');
        }
        if(approximationIsCloseEnough()) {
          setResult(parseFloat(equationResult.toFixed(6)));
          setConfettiFlag(true)
          setTimeout( () => {
            console.log("setting flag to false");
            setConfettiFlag(false);
          }, 5000);
          setMode("Finished");
        } else {
          setIncorrectClassFlag(true);
          setTimeout(() => {
            setIncorrectClassFlag(false)
          }, 750);
        }
      } else if (mode === "Finished") {

      }
    }
    else {
      setCurrentScreen(getCurrentScreen().substr(0, equation.length - 1));
    }
  }

  return (
    <main className={"calculator" + (incorrectClassFlag ? " incorrect" : "")}>
      {confettiFlag === true &&
        <Confetti
          confettiSource={{x: 600, y:600, w:100, h: 50}}
          gravity={.15}
          numberOfPieces={30}
          recycle={false}
        />
      }
      <Screen equation={equation} result={result} approximation={approximation} mode={mode}/>
      <Keypad onButtonPress={onButtonPress}/>
    </main>
  )
}

export default Calculator;