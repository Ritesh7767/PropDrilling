import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todo}) => {

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Sr. No</th>
                    <th>Task Name</th>
                    <th>isActive</th>
                    <th>isCompleted</th>
                    <th>Delete</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {todo.map((ele, i) => {
                    let {taskName , isActive} = ele
                    return (
                        <tr key={ele+i}>
                            <td>{i}</td>
                            <td>{taskName}</td>
                            <td>{isActive ? "Yes" : "No"}</td>
                            <td>{!isActive ? "Yes" : "No"}</td>
                            <td><button>Delete</button></td>
                            <td><button>Mark as Completed</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <TodoItem todo={todo}/>
    </>
  )
}

export default TodoList