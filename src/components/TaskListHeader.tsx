import { TasksProps } from './TaskBoard'
import styles from './TaskListHeader.module.css'


interface TaskListHeaderProps {
    tasks: TasksProps[]
}

export function TaskListHeader( { tasks } : TaskListHeaderProps){
    const tarefasCriadas = tasks.length
    const tarefasConcluidas = tasks.filter( task => task.isComplete).length
    return (
        <div className={styles.container}>
            <div className={styles.teasklistheader}>
                <p className={styles.createdTasks}>Tarefas criadas<span>{tarefasCriadas}</span></p> 
                <p className={styles.completedTasks}>Concluídas<span>{tarefasConcluidas}</span></p> 
            </div>
        </div>
    )
}