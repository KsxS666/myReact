import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
export default class Index extends Component{
  render () {
    return (
      <div style={{fontWeight: 'bold'}}>
        <section>
        1. 跳转到Index路由组件时，如果不希望载入父组件内容，即"/"路由的组件，要给"/"路由设置exact属性。
        </section>
        <section>
        2. 可通过Link标签和history API的方式进行跳转。
        </section>
        <section>
        3. 通过history API跳转，需要执行this.props.history.push("/Exact")。history对象是通过props传入组件。
        </section>
        <section>
        4. 通过Route引入的组件，才会有history传入，否则需要通过withRouter方法传入，这个后面会讲到。
        </section>
        <section>
        5. 点击跳转到Exact，为不加载父组件内容直接跳转。NoExact的子页，则会加载父组件内容。
        </section>
        <Link to="/Exact" className={'link'}>通过Link标签跳转到Exact</Link>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button inline
						onClick={() => {
							this.props.history.push('/NoExact');
						}}
					>
						通过js跳转到NoExact
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button inline
						onClick={() => {
							this.props.history.push('/GetData')
						}}
					>
						测试通过URL获取数据
					</Button>
				</WingBlank>
				<WhiteSpace 
					
				/>
				<WingBlank
					
				>
					<Button inline
						onClick={() => {
							this.props.history.goBack();
						}}
					>
						返回上一页
					</Button>
				</WingBlank>
      </div>
    )
  }
}