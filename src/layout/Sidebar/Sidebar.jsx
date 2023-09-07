import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <button className={styles.toggleButton} onClick={() => setCollapsed(!collapsed)}>
        Toggle
      </button>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <span className={styles.icon}>🏠</span>
          <span className={`${styles.text} ${collapsed ? styles.hide : ''}`}>Home</span>
        </li>
        <li className={styles.menuItem}>
          <span className={styles.icon}>📦</span>
          <span className={`${styles.text} ${collapsed ? styles.hide : ''}`}>Product</span>
          <ul className={`${styles.subMenu} ${collapsed ? styles.hide : ''}`}>
            <li>HSN Code</li>
            <li>Description</li>
            <li>Product Segment</li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <span className={styles.icon}>📈</span>
          <span className={`${styles.text} ${collapsed ? styles.hide : ''}`}>Leads</span>
          <ul className={`${styles.subMenu} ${collapsed ? styles.hide : ''}`}>
            <li>New Leads</li>
            <li>Open Leads</li>
            <li>Dropped Lead</li>
            <li>Hot Lead</li>
            <li>Unassigned Lead</li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <span className={styles.icon}>👥</span>
          <span className={`${styles.text} ${collapsed ? styles.hide : ''}`}>Customer</span>
          <ul className={`${styles.subMenu} ${collapsed ? styles.hide : ''}`}>
            <li>Customer</li>
            <li>Unassigned Customer</li>
          </ul>
        </li>
        <li className={styles.menuItem}>
          <span className={styles.icon}>📞</span>
          <span className={`${styles.text} ${collapsed ? styles.hide : ''}`}>Followup</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
