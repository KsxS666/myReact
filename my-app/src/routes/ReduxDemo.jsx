// import React, {Component} from 'react';
// import { createStore } from 'redux'
// import Counter from '../redux/components/Counter'
// import counter from '../redux/reducers'
// const store = createStore(counter)
// export default class Redux extends Component {
//   render () {
//     return (
//       <div>
//         <Counter value={store.getState()} onIncrement={() => store.dispatch({type: 'INCREMENT'}) } onDecrement={() => alert(3)} />
//         <span>{store.getState()}</span>
//       </div>
//     )
//   }
// }
import React, { Component } from 'react'
import CounterDemo from '../redux/OutDemo/CounterDemo'
import TodosDemo from '../redux/OutDemo/TodosDemo'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
export default class ReduxDemo extends Component {
  render () {
    return (
      <div>
        <Link to='/ReduxDemo/Counter' className={'Link'}>Counter</Link>
        <Link to='/ReduxDemo/Todos' className={'Link'}>Todos</Link>
        <Switch>
          <Route path={'/ReduxDemo/Counter'} component={CounterDemo}></Route>
          <Route path={'/ReduxDemo/Todos'} component={TodosDemo}></Route>
          <Redirect to={'/ReduxDemo/Counter'}></Redirect>
        </Switch>

      </div>
    )
  }
}
