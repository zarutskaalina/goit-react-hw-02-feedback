import React, { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const { name } = evt.target;
    this.setState(pervState => {
      return { [name]: (pervState[name] += 1) };
    });
  };

  render() {
    const feedbackShowCondition =
      !this.state.good && !this.state.neutral && !this.state.bad;

    const total = this.state.good + this.state.neutral + this.state.bad;
    const positivePercentage = (100 * this.state.good) / total;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onClick={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {feedbackShowCondition ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
