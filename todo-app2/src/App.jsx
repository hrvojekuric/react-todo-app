import React, { useState, useEffect } from 'react'
import EditForm from './Components/EditForm'
import InputBox from './Components/InputBox'
import TodoBox from './Components/TodoBox'

const App = () => {

  const [ todos, setTodos ] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos)
    } else {
      return []
    }
  })

  const [ isEditing, setIsEditing ] = useState(false)
  const [ editedTodo, setEditedTodo ] = useState(null)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  const addTodo = (todo) =>{
    setTodos(previousTodos => [...previousTodos, todo])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const changeEditingState = (item) => {
    setIsEditing(true)
    setEditedTodo(item)
  }

  const handleEditedTodo = (editedTodoName) => {
    setTodos(previousTodos => 
      previousTodos.map(item => (
        item.id === editedTodo.id ? { ...item, name: editedTodoName} : item
      ))
    )
    setIsEditing(false)
  }

  

  return (
    <div className='container-sm d-flex justify-content-center bg-primary mt-5' style={{maxWidth: "500px", borderRadius:"1rem", minHeight:"500px"}}>
      <div className='w-100'>
      <InputBox addTodo={addTodo}/>
      <div>
      { isEditing ? 
      <EditForm handleEditedTodo={handleEditedTodo}/>
    : null }
    </div>
      <div className='d-flex justify-content-center w-100'>
      <TodoBox 
        todos={todos} 
        deleteTodo={deleteTodo} 
        changeEditingState={changeEditingState} /> 
    </div>
    </div>
    </div>
  )
}

export default App
