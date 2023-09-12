import React from 'react';
import { FiMenu } from 'react-icons/fi';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle } from 'react-icons/bs';
import styles from './Header.module.css'; // Import the CSS module

function Header({ OpenSidebar, accessToken }) {
  return (
    <header className={styles.header}>
        <div className={styles.menuIcon}>
        <FiMenu className={styles.icon} onClick={OpenSidebar} />
      </div> 

      <div className={styles.headerText}>
        SONGARA International LLP
      </div>
      <div className={styles.headerRight}>
        <BsFillBellFill className={styles.icon} />
        <BsFillEnvelopeFill className={styles.icon} />
        <BsPersonCircle className={styles.icon} />
      </div>
    </header>
  )
}

export default Header;
