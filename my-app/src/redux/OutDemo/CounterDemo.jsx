import React, { Component} from 'react'
import { createStore } from 'redux'
import Counter from '../components/Counter'
import counter from '../reducers/counter'

const store = createStore(counter)
export default class CounterDemo extends Component {
  constructor (props) {
    super(props)
    this.state = { value: 0 }
    store.subscribe(() => {
      console.log('执行了constructor')
      console.log(store.getState())
      this.setState({value: store.getState()})
    })
  }
  render () {
    return (
      <Counter
        value={this.state.value}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />
    )
  }
}
