import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

function Calculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('0');
  const approxPrompt = '(Enter an approximation)';
  const [approximation, setApproximation] = useState('');
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

  const onButtonPress = event => {
    const pressedButton = event.target.innerHTML;
    if (pressedButton === 'C') {
      setCurrentScreen('');
    }
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
      appendCurrentScreen(pressedButton);
    }
    else if (['+', '-', '*', '×', '/', '%'].indexOf(pressedButton) !== -1) appendCurrentScreen(' ' + pressedButton + ' ');
    else if (pressedButton === 'Enter') {
      try {
        const evalResult = evaluate(equation.replace('×', '*'));
        setResult(Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2));
      } catch (error) {
        alert('Invalid Mathematical Equation');
      }
    }
    else {
      setCurrentScreen(getCurrentScreen().substr(0, equation.length - 1));
    }
  }

  return (
    <main className="calculator">
      <Screen equation={equation} result={result} approximation={approximation}/>
      <Keypad onButtonPress={onButtonPress}/>
    </main>
  )
}

export default Calculator;