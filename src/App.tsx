import { Header } from "./components/Header"
import { TasksPanel } from "./components/TasksPanel"
import styles from "./App.module.css"

import "./global.css"

export function App() {

  return (
    <div className={styles.app}>
      <Header />
      <TasksPanel />
    </div>
  )
}


