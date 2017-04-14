let todoId = 0

// action might assign action.type for reducer for each action
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: todoId++,
    text,
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter,
  }
}