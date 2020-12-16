import React, { useState } from 'react';
import Screen from './Screen/Screen';
import Keypad from './Keypad/Keypad';

function Calculator() {
  const [equation, setEquation] = useState('');
  const [result, setResult] = useState('0');

  const clear = () => {
    setEquation('');
  }

  const onButtonPress = event => {
    const pressedButton = event.target.innerHTML;
    if (pressedButton === 'C') clear();
    else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') setEquation(equation + pressedButton);
    else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) setEquation(equation + ' ' + pressedButton + ' ');
    else if (pressedButton === '=') {
      try {
        // eslint-disable-next-line
        const evalResult = eval(equation);
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
      <Screen equation={equation} result={result} />
      <Keypad onButtonPress={onButtonPress}/>
    </main>
  )
}

export default Calculator;