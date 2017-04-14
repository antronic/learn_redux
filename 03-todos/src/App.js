import React from 'react'

import AddTodo from './containers/AddTodo'
import ListTodo from './containers/ListTodo'
import Filters from './components/Filters'

import './AppStyle.scss'

document.title = 'Todo-list'

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="col-6 offset-3">
          <div id="title" className="text-center">
            <h1>Todo-list</h1>
          </div>
          <div className="row todo-box">
            <AddTodo />
            <Filters />
            <ListTodo />
          </div>
        </div>
      </div>
    )
  }
}