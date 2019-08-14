import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, deleteTodo}) => {

const todoList = todos.map(todo => <TodoListItem key={todo.id} {...todo} deleteTodo={deleteTodo} />)


  return (
    <ul>
      {todoList}
    </ul>
  )
}

export default TodoList