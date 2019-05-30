import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Button } from 'antd-mobile';
import Params from './Params.jsx';
import Query from './Query.jsx';
export default class GetData extends Component {
  render () {
    return (
      <div>
        <section>1. 通过params获取URL参数。</section>
        <section>a. 先在Route组件配置路径path={"/GetData/Params/:date"}。</section>
        <section>b. 跳转时url为"/GetData/Params/数据"。</section>
        <section>c. 在组件中通过this.props.match.params.date收取数据。</section>
        <section>2. 通过Query获取URL参数。</section>
        <section>a. 先在Route组件配置路径path={"/GetData/Params"}。</section>
        <section>b. 跳转时url为"/GetData/Params?字段=数据"。</section>
        <section>c. React Router 4无法通过this.props.location.query[字段]获取数据，可以引入qs库，通过qs.parse(this.props.location.search.slice(1))[字段]获取数据。</section>
        <Button inline onClick={() => {this.props.history.push(`/GetData/Params/${new Date()}`)}}>通过params获取URL参数。</Button>
        <Button inline onClick={() => this.props.history.replace(`/GetData/Query?date=${new Date()}`)}>通过QUERY获取URL参数。</Button>
        <Route path={`/GetData/Params/:date`} component={Params} ></Route>
        <Route path={`/GetData/Query`} component={Query} ></Route>
      </div>
    )
  }
}