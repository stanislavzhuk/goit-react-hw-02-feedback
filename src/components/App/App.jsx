import React, { Component } from 'react';
import css from './App.module.css';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, curr) => acc + curr);
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    return total !== 0 ? Math.round((good / total) * 100) : 0;
  };
  
  onLeaveFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={css.app}>
        <Section title="Please Leave your feedback" children>
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
          {Object.values(this.state).some(values => values !== 0) ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(this.countTotalFeedback())}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    )
  }
}

export default App;