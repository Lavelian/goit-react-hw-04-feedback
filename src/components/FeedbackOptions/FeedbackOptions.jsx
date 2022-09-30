import { Button, ContainerButton } from './FeedbackOptions.styled';

import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <ContainerButton>
      {keys.map((key, index) => (
        <Button
          key={index}
          type="button"
          onClick={() => {
            onLeaveFeedback(key);
          }}
        >
          {key}
        </Button>
      ))}
    </ContainerButton>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
};
export default FeedbackOptions;
