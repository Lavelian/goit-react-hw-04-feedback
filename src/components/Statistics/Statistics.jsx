import { Box } from './Statistics.styled';
import PropTypes from 'prop-types';
const Statictics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total:{total}</p>
      <p>Positive Percentage:{positivePercentage}%</p>
    </Box>
  );
};

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statictics;
