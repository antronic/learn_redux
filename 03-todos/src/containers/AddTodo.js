import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = (props) => (
  <div className="col-12">
    <input onKeyPress={
      e => {
        if (e.key === 'Enter' && e.target.value.trim() !== '') {
          props.dispatch(addTodo(e.target.value))
          e.target.value = ''
        }
      }
    } style={{
      border: '2px solid #fb3f6b',
      borderRadius: '50px',
      width: '100%',
      padding: '.5em .75em',
    }} placeholder="...todo"/>
  </div>
)

export default connect()(AddTodo)