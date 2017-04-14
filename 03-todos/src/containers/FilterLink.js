import {connect} from 'react-redux'
import {setFilter} from '../actions'

import Link from '../components/Link'

const mapStateToProps = (state, ownState) => {
  return { active: ownState.filter === state.filter}
}

const mapDispatchToProps = (dispatch, ownState) => {
  return {
    onClickFilter: () => {
      dispatch(setFilter(ownState.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link)