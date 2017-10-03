import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.state={
      filter:''
    }
  }
  updateState(e) {
    this.setState({
          filter:e.target.value
        });
  }
  render() {
    const { value, onChange, options } = this.props
    return (
      <div>
        <h1>{value}</h1>
            <span>Search</span>
            <Search updateState={this.updateState} />
        <select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}