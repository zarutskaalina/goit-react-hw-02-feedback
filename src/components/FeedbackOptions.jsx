import React, { Component } from 'react';
import { ConrainerBtn } from './Styles';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ConrainerBtn>
        <button type="button" onClick={this.props.onGoodClick}>
          Good
        </button>
        <button type="button" onClick={this.props.onNeutralClick}>
          Neutral
        </button>
        <button type="button" onClick={this.props.onBadClick}>
          Bad
        </button>
      </ConrainerBtn>
    );
  }
}
