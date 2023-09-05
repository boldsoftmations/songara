import React from 'react';
import styles from './CustomInput.module.css';

const CustomInput = ({ label, type, placeholder, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
