import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }
  render () {
    const {value, onIncrement, onDecrement } = this.props
    return (
      <p style={{textAlign: 'center'}}>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
}