import styles from "./EmptyTasks.module.css"
import clipboard from "../assets/Clipboard.svg"

export function EmptyTasks(){
    return(
        <main className={styles.mainEmpty}>
                <img src={clipboard} alt="Clipboard" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
        </main>
    )
}