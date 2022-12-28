import { AddNewTask } from "./components/AddNewTask"
import { Header } from "./components/Header"
import "./global.css"

export function App() {

  return (
    <div className="App">
      <Header />
      <AddNewTask />
    </div>
  )
}


