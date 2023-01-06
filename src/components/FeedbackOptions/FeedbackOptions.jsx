import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      {options.map(option => {
        return (
          <button
            key={option}
            onClick={() => onLeaveFeedback(option)}
            name={option}
            className={styles.feedBackButton}
          >
            {option[0].toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.protoType = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
