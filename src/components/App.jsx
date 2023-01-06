import React, { Component } from 'react';

import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statictics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (acc, feedback) => (acc += feedback),
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();

    if (!totalFeedback) return;

    return Math.round((good / totalFeedback) * 100);
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  render() {
    const { good, bad, neutral } = this.state;

    const total = this.countTotalFeedback();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statictics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercent}
            />
          ) : (
            <Notification message="Unfortunately, there is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
