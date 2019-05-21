import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function ParamsExample () {
  return (
    <Router>
      <div>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to='/aa'>aa</Link>
          </li>
          <li>
            <Link to='/bb'>bb</Link>
          </li>
          <li>
            <Link to='/cc'>cc</Link>
          </li>
          <li>
            <Link to='/dd'>dd</Link>
          </li>
        </ul>
        <Route path="/:id" component={Child} />
        <Route path="/order/:direction(asc/desc)" component={ComponentWithRegex} />
      </div>
    </Router>
  )
}
function Child({ match }) {
  console.log(match)
  return (
    <div>
      <h3>ID：{match.params.id}</h3>
    </div>
  )
}
function ComponentWithRegex({ match }) {
  return (
    <div>
      <h3>Only asc/desc are allowed: {match.params.direction}</h3>
    </div>
  );
}
export default ParamsExample