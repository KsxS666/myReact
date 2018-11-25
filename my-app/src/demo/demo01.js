import React, { Component } from 'react';
class HelloComponent extends Component {
    // render() {
    //     return React.createElement('h1', {className:"hello"}, 'Hello World');
    // }
    render(){
        return <h1>Hello{this.props.name?this.props.name:"World1"}</h1>
    }
}
export default HelloComponent