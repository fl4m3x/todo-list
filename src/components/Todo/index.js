import React, { useState } from 'react'
import { Form } from '../../components'
import './styles.css';


export default function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: null,
  })

  const submitUpdate = value => {
    editTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return <Form edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.title}
      </div>
      <div className='icons'>
        <button type='button' className='btn  btn-danger' onClick={() => removeTodo(todo.id)}>Remover To-Do</button>
        <button type='button' className='btn  btn-warning' onClick={() => setEdit({ id: todo.id, value: todo.title })}> Alterar To-Do </button>
      </div>
    </div>

  ))
}
