import React from 'react';
import styles from './Leaderboard.module.css';

import Board from './body/Board.js';
import Heading from './Header/Heading/Heading';
import Header from './Header/Header';
const colors = ['red', 'yellow', 'orange', 'magenta', 'cyan'];

const Leaderboard = () => {
  return (
    <div className={styles.leaderboard}>
      <Header />
      <Board />
    </div>
  );
};

export default Leaderboard;
