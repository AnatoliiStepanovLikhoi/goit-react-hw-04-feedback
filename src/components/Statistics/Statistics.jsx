import PropTypes from 'prop-types';

export const Statictics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage = null,
}) => {
  return (
    <ul>
      <li key="good">Good: {good}</li>
      <li key="neutral">Neutral: {neutral}</li>
      <li key="bad">Bad: {bad}</li>
      <li key="total">Total feedbacks: {total}</li>
      <li key="positive">Positive feedbacks: {positivePercentage ?? '--'}%</li>
    </ul>
  );
};

Statictics.protoTypes = {
  good: PropTypes.node.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
