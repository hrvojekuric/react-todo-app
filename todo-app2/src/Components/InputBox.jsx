import React from 'react'
import { useState } from 'react'

const InputBox = ({ addTodo }) => {

  const [ todo, setTodo ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo({
      name: todo,
      id: Date.now(),
      checked: false
    })
    setTodo("")
  }
  return (
      <form
      onSubmit={handleSubmit}>
        <div className='input-group'>
        <input className='form-control mt-2' 
        required
        maxLength={20}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}/>
        <button className='btn mt-2 btn-dark' style={{margin: "8px 0px 0px 0px"}}
        type='submit'>Add</button>
        </div>
      </form>
  )
}

export default InputBox
