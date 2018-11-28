import React, { Component } from 'react';
let names = ["zed","talon","jhin"]
class HelloComponent2 extends Component{
    render(){
        return <div>
                {
                    names.map((name)=>{
                        return <div key={name}>Hello,{name}</div>

                    })
                }
            </div>
    }
}
export default HelloComponent2;