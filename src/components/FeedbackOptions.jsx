import React, { Component } from 'react';
import { ConrainerBtn } from './Styles';

export class FeedbackOptions extends Component {
  render() {
    const { options, onClick } = this.props;
    return (
      <ConrainerBtn>
        {options.map(option => {
          return (
            <button type="button" onClick={onClick} key={option} name={option}>
              {option}
            </button>
          );
        })}
      </ConrainerBtn>
    );
  }
}
