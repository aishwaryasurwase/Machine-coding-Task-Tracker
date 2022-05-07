import React from 'react'
import Task from './Task.js'

const Tasks = ({ tasks , toggleTask, onDeleteTask}) => {
    return (
        <div style={{clear: 'both'}}>
            <ul>
                {tasks.map(task => {
                    return (
                        <Task task={task} toggleTask={toggleTask} onDeleteTask={onDeleteTask}/>
                    )})}
            </ul>
        </div>
    )
}

export default Tasks