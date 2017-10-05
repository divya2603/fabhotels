import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  fetchPlacesIfNeeded
} from '../actions'
import SearchList from '../components/SearchList'
import Search from '../components/Search'

class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.updateState = this.updateState.bind(this);
    this.state={
      filter:'reactjs'
    }
  }

  updateState(e) {
    this.setState({
          filter:e.target.value
        });
    this.props.dispatch(fetchPlacesIfNeeded(this.state.filter))
  }

  componentDidMount() {
    const { dispatch, selectedPlace } = this.props
    dispatch(fetchPlacesIfNeeded(selectedPlace))
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps)
    if (this.props.query !== prevProps.query) {
      const { dispatch, selectedPlace } = this.props
      dispatch(fetchPlacesIfNeeded(selectedPlace))
    }
  }


  render() {
    console.log(this.props.places)
    const { isFetching, places} = this.props
    return (
      <div>
        <Search updateState={this.updateState} />
        <SearchList searchList={this.props.places}
                           filter={this.state.filter} />
      </div>
    )
  }
}

AsyncApp.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { placesSearched } = state
  console.log(placesSearched)
  const {
    isFetching,
    items: places
  } = placesSearched || {
    isFetching: true,
    items: []
  }

  return {
    isFetching,
    places
  }
}

export default connect(mapStateToProps)(AsyncApp);