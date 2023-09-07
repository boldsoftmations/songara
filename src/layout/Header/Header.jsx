import React, { useState } from 'react';
import styles from './Header.module.css';
import Sidebar from './../Sidebar/Sidebar';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={styles.headerContainer}>
    <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    <div className={styles.header}>
      {/* Hamburger Icon */}
    <div className={styles.hamburgerIcon} onClick={() => setCollapsed(!collapsed)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 6H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 18H21" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </div>
        <h3>Songara International LLP</h3>
      </div>
    </div>
  );
};


export default Header;
