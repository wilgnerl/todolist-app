import { PlusCircle } from "phosphor-react"
import style from "./AddNewTask.module.css"

export function AddNewTask(){
    return(
        <div className={style.content}>
            <form>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button type="submit">
                    Criar
                    <PlusCircle />
                </button>
            </form>
        </div>
    )
}