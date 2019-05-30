import React, {Component} from 'react';
import { Button } from 'antd-mobile';

export default class Exact extends Component {
  render () {
    return (
      <div>
        <span>1. 值得注意的是，如果设置了exact属性，就需要在父路由组件引入子组件，否则会因为父组件无法显示，而导致子组件也加载不出来。</span>
        <section>
          <Button type="ghost" size="small" inline style={{cursor: 'pointer'}}
              onClick={() => {
                this.props.history.push('/Exact/ExactInside')
              }}
            >
              点击跳转到ExactInside页
          </Button>
        </section>
        <section>
          <Button type="ghost" size="small" inline style={{cursor: 'pointer'}}
              onClick={() => {
                this.props.history.goBack();
              }}
            >
              点击返回上一页
          </Button>
        </section>

      </div>
    )
  }
}