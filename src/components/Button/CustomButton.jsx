import React from 'react';
import styles from './CustomButton.module.css';

const CustomButton = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
