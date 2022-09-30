import FeedbackOptions from 'components/FeedbackOptions';
import Statictics from 'components/Statistics';
import Notification from 'components/Notification';
import PropTypes from 'prop-types';
import { Title } from './Title.styled';

const countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
const countPositiveFeedbackPercentage = ({ good, bad }) => {
  return (good / (good + bad)) * 100 || 0;
};
const Section = ({ title, onLeaveFeedback, options }) => (
  <>
    <Title>{title}</Title>
    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
    {countTotalFeedback(options) > 0 ? (
      <Statictics
        good={options.good}
        neutral={options.neutral}
        bad={options.bad}
        total={countTotalFeedback(options)}
        positivePercentage={countPositiveFeedbackPercentage(options).toFixed(0)}
      />
    ) : (
      <Notification message="There is no feedback" />
    )}
  </>
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
};

export default Section;
