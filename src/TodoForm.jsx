import React, {useState} from 'react'
import TodoList from './TodoList'

const TodoForm = ({todo, setTodo}) => {

  let [text, setText] = useState("")

  const handleSubmit = event => {
      event.preventDefault()
      if(text){
        setTodo([...todo, {taskName : text, isActive : true}])
      }
      else{
        alert("Please write your task name first")
      }
  }

return (
  <>
    <form onSubmit={event => handleSubmit(event)}>
        <input type="text" placeholder='Enter your todo here' onChange={e => setText(e.target.value)} />
        <input type="submit" />
    </form>
    <TodoList todo={todo}/>
  </>
  )
}

export default TodoForm