import React from 'react';

function TodoList({removeTodo, todos}) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li className={`${(todo.done)?'done':''}`} key={todo.id}>
          {todo.text}
          <button onClick={() => {removeTodo(todo)}}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
