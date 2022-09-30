import { H2 } from './Notification.styled';
import PropTypes from 'prop-types';
const Notification = ({ message }) => {
  return <H2> {message} </H2>;
};
Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;
