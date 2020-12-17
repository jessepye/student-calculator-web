import React from 'react';
import ResultScreen from './ResultScreen/ResultScreen'
import ComputationScreen from './ComputationScreen/ComputationScreen'
import ApproximationScreen from './ApproximationScreen/ApproximationScreen'

class Screen extends React.Component{
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <section className="screen">
        <ComputationScreen mode={this.props.mode}>{this.props.equation}</ComputationScreen>
        <ResultScreen>{this.props.result}</ResultScreen>
        <ApproximationScreen mode={this.props.mode}>{this.props.approximation}</ApproximationScreen>
      </section>
    )
  }
}

export default Screen;