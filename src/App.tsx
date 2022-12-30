import { Header } from "./components/Header"
import { TasksPanel } from "./components/TasksPanel"
import "./global.css"

export function App() {

  return (
    <div className="App">
      <Header />
      <TasksPanel />
    </div>
  )
}


