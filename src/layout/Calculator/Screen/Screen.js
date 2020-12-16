import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen'
import ComputationScreen from './ComputationScreen/ComputationScreen'
import ApproximationScreen from './ApproximationScreen/ApproximationScreen'

const screen = (props) => (
  <section className="screen">
    <ComputationScreen>{props.equation}</ComputationScreen>
    <ResultScreen>{props.result}</ResultScreen>
    <ApproximationScreen>{props.approximation}</ApproximationScreen>
  </section>
);

export default screen;