import React, { useState } from 'react';
import styles from './Sidebar.module.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {  FaSignOutAlt, FaProductHunt, FaUsers, FaFolderOpen, FaUserCircle, FaTemperatureHigh } from 'react-icons/fa';
import { IoMdSwitch } from 'react-icons/io';
import { BsFillMoonFill,BsFillSunFill} from 'react-icons/bs';
import { BiSolidDashboard } from 'react-icons/bi';
const Layout = ({ openSidebarToggle, OpenSidebar, theme, toggleTheme }) => {

  return (
    <div className={styles.sidebarContainer}>
      <ProSidebar collapsed={openSidebarToggle} theme={theme === 'light' ? styles.light : styles.dark} style={{ height: '100vh' }}>
    
        <Menu iconShape="square">
          <MenuItem icon={<BiSolidDashboard />}>Dashboard</MenuItem>
          <SubMenu title="Products" icon={<FaProductHunt />}>
            <MenuItem>HSN Code</MenuItem>
            <MenuItem>Description</MenuItem>
            <MenuItem>Product Segment</MenuItem>
          </SubMenu>
          <SubMenu title="Leads" icon={<FaFolderOpen />}>
            <MenuItem>New</MenuItem>
            <MenuItem>Opened</MenuItem>
            <MenuItem>Dropped</MenuItem>
            <MenuItem>Hot</MenuItem>
            <MenuItem>Unassigned</MenuItem>
          </SubMenu>
          <SubMenu title="Customer" icon={<FaUsers />}>
            <MenuItem>Customer</MenuItem>
            <MenuItem>Unassigned Customer</MenuItem>
          </SubMenu>
          <MenuItem icon={<FaTemperatureHigh />}>Followup</MenuItem>
          <MenuItem icon={theme === 'light' ? <BsFillMoonFill /> : <BsFillSunFill />} onClick={toggleTheme}>
            Switch Theme
          </MenuItem>
          <MenuItem icon={<FaSignOutAlt />} >
        Logout
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
}

export default Layout;
