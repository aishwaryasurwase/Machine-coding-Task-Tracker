import React from 'react'
import styles from './Header.module.css';

const Header = ({ addTaskClicked }) => {

  return (
    <div className={styles.taskHeader}>
      <span className={styles.heading}>Task Tracker</span>
      <span type='button' onClick={addTaskClicked} className={styles.btn}>Add Task</span>
    </div>
  )
}

export default Header