const TodoBox = ({ todos, deleteTodo, changeEditingState }) => {
  return (
    <div className="mt-1 w-100">
      {todos ? todos.sort((a, b) => b.id - a.id).map(item => (
        <div key={item.id} className="input-group mt-1 mb-1 w-100">
        <input className="form-control bg-white"  placeholder={item.name} disabled/>
        <button className="btn btn-secondary"
        onClick={() => changeEditingState(item)}>✏️</button>
        <button className="btn btn-dark"
        onClick={() => deleteTodo(item.id)}>❌</button>
        </div>
      )) : null }
    </div>
  )
}

export default TodoBox
