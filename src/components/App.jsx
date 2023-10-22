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
    total: 0,
    positivePercentage: 0,
  };

  handleGoodBtn = () => {
    this.setState({ good: this.state.good + 1 });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutralBtn = () => {
    this.setState({ neutral: this.state.neutral + 1 });
    this.countTotalFeedback();
  };

  handleBadBtn = () => {
    this.setState({ bad: this.state.bad + 1 });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(state => {
      return {
        total: state.good + state.neutral + state.bad,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        positivePercentage: (100 * state.good) / state.total,
      };
    });
  };

  render() {
    const feedbackShowCondition =
      !this.state.good && !this.state.neutral && !this.state.bad;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodClick={this.handleGoodBtn}
            onNeutralClick={this.handleNeutralBtn}
            onBadClick={this.handleBadBtn}
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
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
