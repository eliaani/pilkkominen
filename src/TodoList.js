import React, { useState } from 'react';
import { TodoTable } from './TodoTable';

function Todolist() {
  const [todo, setTodo] = useState({ date: '', description: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index) => {
    const todos2 = todos.filter((todo, i) => i !== index);
    setTodos(todos2);
    }

  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <input type="date" onChange={inputChanged} placeholder="Date" name="date" value={todo.date} />
      <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
};

export default Todolist;