import { useState } from 'react';
import Section from './Section/';
import Container from './Container/Container.styled';

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

  return (
    <Container>
      <Section
        title="Please leave feedback"
        onLeaveFeedback={upValue}
        options={feedback}
      />
    </Container>
  );
}
