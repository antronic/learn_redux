import React from 'react'

export default ({active, onClickFilter, children}) => {
  const className = 'filter-link ' + (active ? 'active' : '')
  return (
    <span onClick={onClickFilter} 
      className={className}
    >{children}</span>
  )
}