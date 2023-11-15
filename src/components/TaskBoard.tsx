import styles from './TaskBoard.module.css'

import { NewTask } from './NewTask'
import { TaskList } from './TaskList'
import { TaskListHeader } from './TaskListHeader'
import { useState } from 'react'

export interface TasksProps {
    id: string,
    title: string,
    isComplete: boolean
}

export function TaskBoard(){
    const [tasks, setTasks] = useState <TasksProps[]>([])
    return (
        <div className={styles.taskboard}>
            <NewTask onCreateNewTask={setTasks}/>
            <TaskListHeader tasks={tasks}/>
            <TaskList tasks={tasks} onTasksClick={setTasks}/>
        </div>
    )
}