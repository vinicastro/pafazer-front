import styles from './TaskList.module.css'
import {ClipboardText, Circle, CheckCircle, Trash } from 'phosphor-react'
import { TasksProps } from './TaskBoard'


interface TaskListProps {
    tasks: TasksProps[],
    onTasksClick: React.Dispatch<React.SetStateAction<TasksProps[]>>
}


export function TaskList({ tasks, onTasksClick } : TaskListProps) {
    // const tasksOld = [
    //     {
    //         id: 1,
    //         title: 'Deixar o site "Pá fazer" bonitão!',
    //         isComplete: false
    //     },
    //     {
    //         id: 2,
    //         title: 'Descer com o lixo da semana',
    //         isComplete: true
    //     },
    //     {
    //         id: 3,
    //         title: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    //         isComplete: true
    //     }
    // ]
    return(
        (tasks.length ? <FilledTaskList tasks={tasks} onTasksClick={onTasksClick} /> : <EmptyTaskList />)
    )
}


function FilledTaskList({ tasks, onTasksClick } : TaskListProps) {

    function handleTaskCompletion(id : string) {
        const updatedTaskList = tasks.map( task => {
            const newTask = task.id === id ? {...task, isComplete: !task.isComplete} : {...task}
            return newTask
    
        })
        onTasksClick(updatedTaskList)
    }

    function handleDeleteTask(id : string) {
        const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id)
        onTasksClick(tasksWithoutDeletedOne)
    }

    return (
        tasks.map( task => {
            return(
                <div className={styles.filledTaskListContainer} key={task.id}>
                    <div className={styles.filledTaskList}>
                        <div className={styles.task}>
                            <div className={styles.taskContainer} id={task.id} onClick={() => handleTaskCompletion(task.id)}>
                                {task.isComplete ? <CheckCircle size={24} weight='fill' className={styles.checkCircle}/> : <Circle size={24} className={styles.circle} /> }
                                <p className={task.isComplete ? styles.completed : ''}>{task.title}</p>
                            </div>
                            <div className={styles.trash} onClick={() => handleDeleteTask(task.id)}>
                                <Trash size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        })
    )
}

function EmptyTaskList() {
    return(
        <>
            <div className={styles.emptytasklistcontainer}>
                <div className={styles.emptytasklist}>
                    <ClipboardText size={56} weight='thin'/>
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div>
        </>
    )
}