import styles from "./TasksPanel.module.css"
import { EmptyTasks } from "./EmptyTasks"
import { ChangeEvent, FormEvent, useState } from "react"
import { Task } from "./Task"
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react"


interface tasksProps{
    id: string
    isCompleted: boolean
    content: string
}

export function TasksPanel(){
    const [tasks, setTasks] = useState<tasksProps[]>([{
        id: "",
        isCompleted: false,
        content: ""
    }])
    const [newContet, setNewContent] = useState("")

    function createTask(event: FormEvent){
        event.preventDefault();
        const newTask = {
            id: uuidv4(),
            isCompleted: false,
            content: newContet
        }
        setTasks([...tasks, newTask])
        setNewContent("")
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity("")
        setNewContent(event.target.value)
    }

    function deleteTask(taskId: string){
        const tasksWithoutDeletedOne = tasks.filter((task: tasksProps) => {
        return task.id !== taskId
        })

        setTasks(tasksWithoutDeletedOne)
    }

    function updateTask(taskId: string){
        const tasksWithoutDeletedOne = tasks.map((task: tasksProps) => {
            if(task.id === taskId){
                task.isCompleted = !task.isCompleted 
                return task
            }
            return task
        })
    
        setTasks(tasksWithoutDeletedOne)
    }

    function countTasksCompleted(){
        const tasksCompleted = tasks.filter((task: tasksProps) => {
        return task.isCompleted === true
        })

        return tasksCompleted.length
    }
    

    return(
        <div className={styles.content}>
            <form onSubmit={createTask}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa"
                    onChange={handleNewTask}
                    value={newContet}
                />
                <button type="submit" >
                    Criar
                    <PlusCircle />
                </button>
            </form>

            <header className={styles.header}>
                <div className={styles.leftDiv}>
                    <strong>
                        Tarefas criadas 
                            <span className={styles.leftSpan}>
                                {tasks.length - 1}
                            </span>
                        </strong>
                </div>
                <div className={styles.rightDiv}>
                <strong>
                    Concluidas 
                        <span className={styles.rightSpan}>
                        {`${countTasksCompleted()} de ${tasks.length - 1}`}
                        </span>
                    </strong>
                </div>
            </header>
            {   
                tasks.length <= 1
                ? <EmptyTasks /> 
                : tasks.map((task: tasksProps) => {
                    if(task.id.length === 0){
                        return(
                            <div key={uuidv4()}></div>
                        )
                    }
                    return (
                        <Task 
                            key={task.id}
                            taskId={task.id}
                            isCompleted={task.isCompleted}
                            content={task.content}
                            onDeleteTask={deleteTask}
                            onUpdateTask={updateTask}
                        />
                    )
                })
            }
        </div>
    )
}