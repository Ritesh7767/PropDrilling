import { useState } from 'react'
import './App.css'
import TodoForm from './TodoForm'

function App() {

  let [todo, setTodo] = useState([])

  return (
    <>
      <TodoForm todo={todo} setTodo={setTodo}/>
    </>
  )
}

export default App
