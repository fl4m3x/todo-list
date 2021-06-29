import React, { useState, useEffect, useRef } from 'react'
import './styles.css';

export default function Form(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus();
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      userId: props.userId,
      title: input,
      completed: ''
    });

    setInput('');

  }

  const handleOnChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input onChange={handleOnChange} type='text' placeholder='Editar um to-do' value={input} name='title' className='todo-input' />
          <button className='btn btn-warning'> Editar</button>
        </>
      ) :
        <>
          <input onChange={handleOnChange} type='text' placeholder='Digite a sua tarefa atual' value={input} name='title' className='form-control form-control-lg' />
        </>
      }
    </form>
  );
}
