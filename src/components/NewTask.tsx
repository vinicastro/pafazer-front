import styles from './NewTask.module.css'
import { PlusCircle } from 'phosphor-react'
import { v4 as uuid } from 'uuid';
import { TasksProps } from './TaskBoard';
import { ChangeEvent, FormEvent, useState } from 'react';

interface newTaskProps{
    onCreateNewTask: React.Dispatch<React.SetStateAction<TasksProps[]>>
}

export function NewTask({ onCreateNewTask }: newTaskProps){
    const [newTask, setNewTask] = useState('')
    const isEmpty = newTask.length === 0

    function handleCreateTask (event: FormEvent) {
        event.preventDefault()
        const newTaskToAdd = {
            id: uuid(),
            title: newTask,
            isComplete: false
        }
        onCreateNewTask(( taskList)  => [...taskList, newTaskToAdd])
        setNewTask('')
    }


    function handleNewTaskChange (event: ChangeEvent<HTMLTextAreaElement>) {
        setNewTask(event.target.value)
    }

    return (
        <div className={styles.container}>
            <form className={styles.newTask} onSubmit={handleCreateTask}>
                <textarea 
                    className={styles.textarea}
                    placeholder='Adicione uma nova tarefa'
                    name='newTask'
                    value={newTask}
                    onChange={handleNewTaskChange}
                />
                <button className={styles.createButton} type="submit" disabled={isEmpty}>
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>
        </div>
    )
}