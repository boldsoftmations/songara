import React from 'react';
import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Spinner;
