import React from 'react'

export default ({text, completed, onClick}) => {
  return (
    <div className="row">
      <div className="col-12 todo" onClick={onClick}>
        <p className={completed ? 'completed' : ''}>{text}</p>
      </div>
    </div>
  )
}