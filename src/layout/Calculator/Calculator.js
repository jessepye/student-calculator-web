import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

function Calculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('0');
  const approxPrompt = '(Enter an approximation)';
  const [approximation, setApproximation] = useState(approxPrompt);
  /*
    EnterintEquation
    EnteringApproximation
    Finished
  */
  const [mode, setMode] = useState('EnteringEquation');

  const onButtonPress = event => {
    const pressedButton = event.target.innerHTML;
    if (pressedButton === 'C') {
      setEquation('');
    }
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
      setEquation(equation + pressedButton);
    }
    else if (['+', '-', '*', '×', '/', '%'].indexOf(pressedButton) !== -1) setEquation(equation + ' ' + pressedButton + ' ');
    else if (pressedButton === 'Enter') {
      try {
        const evalResult = evaluate(equation.replace('×', '*'));
        setResult(Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2));
      } catch (error) {
        alert('Invalid Mathematical Equation');
      }
    }
    else {
      setEquation(equation.trim());
      setEquation(equation.substr(0, equation.length - 1));
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