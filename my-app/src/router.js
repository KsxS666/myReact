import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Intro from './routes/Intro.jsx'
export default class Router extends Component{
  render () {
    return(
      <BrowserRouter>
        <Intro />
      </BrowserRouter>
    )
  }
}
