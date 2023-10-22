import React, { Component } from 'react';
import { Wrapper } from './Styles';

export class Section extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.title && <h2>{this.props.title}</h2>}
        {this.props.children}
      </Wrapper>
    );
  }
}
