import React from 'react'
import styles from './Tasks.module.css';

const Task = ({task, toggleTask, onDeleteTask}) => {
  return (
        <div key={task.id} className={styles.task_list_item}
            style={{
                borderLeft: `5px solid ${task.reminder ? '#90EE90' : 
                    'none'}`
          }} onDoubleClick={() => toggleTask(task.id)}>
            {task.name} <br/>
            {task.dayTime}

            <span style={{ position: 'absolute', right: '1rem' }} onClick={()=>onDeleteTask(task.id)}>X</span>
        </div>
  )
}

export default Task