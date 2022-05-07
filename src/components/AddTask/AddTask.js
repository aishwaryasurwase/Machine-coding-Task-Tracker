import React, {useState} from 'react'
import styles from './AddTask.module.css'

const AddTask = ({ saveTask }) => {
    const [task, setTaskName] = useState('');
    const [dayTime, setDayTime] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmitAddTask = (e) => {
        e.preventDefault();
        saveTask({ name: task, dayTime, reminder })
        setTaskName('');
        setDayTime('');
        setReminder(false)
    }

    return (
        <form className={styles.addTaskForm} onSubmit={onSubmitAddTask}>
            <div className={styles.formGrp}>
                <label className={styles.lbl} >Task</label> 
                <input type="text" placeholder='Add Task' className={styles.iput} value={task}
                onChange={(e) =>  setTaskName(e.target.value) } /> 
            </div>
            <div className={styles.formGrp}>
                <label className={styles.lbl}>Day & Time</label> 
                <input type="text" placeholder="Add Day & Time" value={dayTime}
                    className={styles.iput} onChange={(e) =>  setDayTime(e.target.value) } /> 
            </div>
            <div style={{ clear: 'both', textAlign: 'start'}}>
                <label style={{ margin: '1rem', display: 'inline-block'}} className={styles.setReminder}>Set reminder</label>
                <input type="checkbox"  onChange={(e) => setReminder(e.currentTarget.checked) } value={reminder}/>
            </div>
            <input type="submit" className={styles.btn} value={'Save Task'} />
        </form>
    )
}

export default AddTask