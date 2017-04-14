import React from 'react'

import Link from '../containers/FilterLink'

export default () => {
  return (
    <div id="filter" className="col-12 text-center">
      <Link filter="SHOW_ALL">All</Link>
      <Link filter="SHOW_COMPLETED">Completed</Link>
      <Link filter="SHOW_TODO">Todo</Link>
    </div>
  )
}