import React from 'react'

import Todo from './Todo'

export default ({ todos, onTodoClick }) => {
  return (
    <div id="todo-list" className="col-10 offset-1">
      {
        todos.map(todo => (
            <Todo 
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
            />
          )
        )
      }
    </div>
  )
}