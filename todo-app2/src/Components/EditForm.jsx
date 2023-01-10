import React from 'react'
import { useState } from 'react'

const EditForm = ({ handleEditedTodo }) => {

    const [ editedTodoName, setEditedTodoName ] = useState("")

    const handleEditingForm = (e) =>{
        e.preventDefault()
        handleEditedTodo(editedTodoName)
    }

  return (
    <div className='container'>
      <form
      onSubmit={handleEditingForm}
      >
        <div className='input-group'>
        <input className='form-control mt-2'
        value={editedTodoName}
        maxLength={20}
        required
        onChange={(e) => setEditedTodoName(e.target.value)}
        />
        <button className='btn-dark mt-2'
        type='submit'
        >Confirm</button>
        </div> 
      </form>
      
    </div>
  )
}

export default EditForm
