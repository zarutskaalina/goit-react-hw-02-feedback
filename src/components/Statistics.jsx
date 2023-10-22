import React, { Component } from 'react';
import { ConrainerStatistics } from './Styles';

export class Statistics extends Component {
  render() {
    return (
      <div>
        {this.props.title && <h2>{this.props.title}</h2>}

        <ConrainerStatistics>
          <p>Good: {this.props.good}</p>
          <p>Neutral: {this.props.neutral}</p>
          <p>Bad: {this.props.bad}</p>
          <p>Total: {this.props.total}</p>
          <p>
            Positive Percentage: {Math.round(this.props.positivePercentage)}%
          </p>
        </ConrainerStatistics>
      </div>
    );
  }
}
