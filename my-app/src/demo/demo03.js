import React,{Component} from 'react'
let arr = [
    <h1 key="1">你牛b</h1>,
    <h1 key="2">还行吧</h1>
]
class HelloComponent3 extends Component{
    render(){
        return <div>
            {arr}
        </div>
    }
}
export default HelloComponent3;
