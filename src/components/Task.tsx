import styles from "./Task.module.css"
import { Trash } from "phosphor-react"

interface taskProps{
    taskId: string
    isCompleted: boolean
    content: string
    onDeleteTask: (taskId: string) => void
    onUpdateTask: (taskId: string) => void
}

export function Task({isCompleted, content, taskId, onDeleteTask, onUpdateTask}: taskProps){
    function handleDeleteTask(){
        onDeleteTask(taskId)
    }

    function handleUpdateTask(){
        onUpdateTask(taskId)
    }
    return(
        <div className={styles.content}>
            <input type="checkbox" id={taskId} onClick={handleUpdateTask}/>
            <label htmlFor={taskId} className={(!isCompleted) ? styles.unmark : styles.mark}>
                {content}
            </label>
            <button 
                className={styles.button}
                onClick={handleDeleteTask}
            >
                <Trash className={styles.trash} size={24}/>
            </button>
        </div>
    )
}