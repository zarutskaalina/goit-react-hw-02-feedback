import React, { Component } from 'react';
import { ConrainerStatistics } from './Styles';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        {this.props.title && <h2>{this.props.title}</h2>}
        <ConrainerStatistics>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Percentage: {Math.round(positivePercentage)}%</p>
        </ConrainerStatistics>
      </div>
    );
  }
}
