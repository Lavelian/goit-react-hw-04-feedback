import { useState } from 'react';

import Container from './Container/Container.styled';
import FeedbackOptions from 'components/FeedbackOptions';
import Statictics from 'components/Statistics';
import Notification from 'components/Notification';
import Title from './Title';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = { good, neutral, bad };

  const upValue = name => {
    switch (name) {
      case 'good':
        setGood(value => value + 1);
        break;
      case 'neutral':
        setNeutral(value => value + 1);
        break;
      case 'bad':
        setBad(value => value + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
  const countPositiveFeedbackPercentage = ({ good, bad }) => {
    return (good / (good + bad)) * 100 || 0;
  };

  return (
    <Container>
      <Title>Please leave feedback</Title>
      <FeedbackOptions options={feedback} onLeaveFeedback={upValue} />
      {countTotalFeedback(feedback) > 0 ? (
        <Statictics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={countTotalFeedback(feedback)}
          positivePercentage={countPositiveFeedbackPercentage(feedback).toFixed(
            0
          )}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Container>
  );
}
