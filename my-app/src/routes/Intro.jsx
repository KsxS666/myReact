import React, {Component, Fragment} from 'react';
import { Route } from 'react-router-dom';
import ReactLo from '../ReactLo'
import Index from './Index'
import Exact from './Exact'
import ReduxDemo from './ReduxDemo'
import ExactInside from './ExactInside'
import NoExact from './NoExact'
import GetData from './GetData'
// import Params from './Params';
export default class Intro extends Component {
  render () {
    return (
      <Fragment>
        <Route path={'/'} component={ReactLo} exact></Route>
        <Route path={'/Index'} component={Index}></Route>
        <Route path={'/Exact'} component={Exact} exact></Route>
        <Route path={'/ReduxDemo'} component={ReduxDemo}></Route>
        <Route path={'/Exact/ExactInside'} component={ExactInside}></Route>
        <Route path={'/NoExact'} component={NoExact}></Route>
        <Route path={'/GetData'} component={GetData}></Route>
        {/* <Route path={`/GetData/Params/:date`} component={Params} ></Route> */}
      </Fragment>
    )
  }
}