import React, { useState, useEffect, useCallback } from 'react'
import { Form, Todo } from '../../components';
import api from '../../services/api';
import './styles.css';

export default function List(props) {
  const [todos, setTodos] = useState([]);

  const atualizarTodos = useCallback(() => {
    api.get(`users/${props.id}/todos`).then((res) => {
      setTodos(res.data);
    })
  }, [props.id])


  useEffect(() => {
    atualizarTodos();
  }, [atualizarTodos])



  const adicionarTodo = todo => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  }

  const alterarTodo = (todoId, todoNewText) => {
    if (!todoNewText || /^\s*$/.test(todoNewText)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? todoNewText : item)))
  }

  const completarTodo = id => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos);
  }

  const removerTodo = id => {
    const removeTodoArray = [...todos].filter(todo => todo.id !== id)
    setTodos(removeTodoArray);
  }



  return (
    <div className='todo-container'>
      <strong> Tarefas de {props.userName}</strong>
      <Form onSubmit={adicionarTodo} userId={props.id} />
      <div className='todo-list-container'>
        <Todo todos={todos} completeTodo={completarTodo} removeTodo={removerTodo} editTodo={alterarTodo} />
      </div>


    </div>
  )
}
