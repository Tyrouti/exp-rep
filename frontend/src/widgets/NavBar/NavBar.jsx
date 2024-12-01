import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/action">Action</Link></li>
      </ul>
    </nav>
  );
};
