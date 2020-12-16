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

  const approximationIsCloseEnough = () => {
    console.log('close enough?');
    let equationResult = evaluate(equation.replace('×', '*'));
    let diff = Math.abs(parseFloat(approximation) - equationResult);
    console.log('diff:', diff);
    if (diff <= 1) {
      return true;
    }
    let diffProportion = Math.abs(diff/equationResult);
    console.log('diffProportion:', diffProportion);
    if(diffProportion < 0.15) {
      return true;
    }

    return false;
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
      console.log('mode:', mode);
      if (mode === 'EnteringEquation') {
        setMode('EnteringApproximation');
        setApproximation(approxPrompt);
      } else if (mode === 'EnteringApproximation') {
        let equationResult;
        try {
          equationResult = evaluate(equation.replace('×', '*'));
        } catch (error) {
          alert('Invalid Mathematical Equation');
        }
        if(approximationIsCloseEnough()) {
          setResult(equationResult);
          setMode("Finished");
        }
      }
    }
    else {
      setCurrentScreen(getCurrentScreen().substr(0, equation.length - 1));
    }
  }

  return (
    <main className="calculator">
      <Screen equation={equation} result={result} approximation={approximation} mode={mode}/>
      <Keypad onButtonPress={onButtonPress}/>
    </main>
  )
}

export default Calculator;