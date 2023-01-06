import PropTypes from 'prop-types';

import styles from './Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={styles.subtitle}>{message}</p>;
};

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
