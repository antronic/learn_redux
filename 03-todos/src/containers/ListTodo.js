import {connect} from 'react-redux'
import {toggleTodo} from '../actions'
import TodoList from '../components/TodoList'

const filter = (state, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return state
    case 'SHOW_COMPLETED': {
      return state.filter(todo => todo.completed)
    }
    case 'SHOW_TODO': {
      return state.filter(todo => !todo.completed)
    }
    default:
      return state
  }
}

const mapStateToProps = (state) => {
  return {
    todos: filter(state.todos, state.filter),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)