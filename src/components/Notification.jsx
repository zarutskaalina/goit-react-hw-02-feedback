import React, { Component } from 'react';

export class Notification extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.message}</h4>
      </div>
    );
  }
}
