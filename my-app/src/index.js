import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import HelloComponent from './demo/demo01';
// import HelloComponent2 from './demo/demo02';
// import HelloComponent3 from './demo/demo03';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<HelloComponent name="Lc"/>,document.getElementById('root'))
// ReactDOM.render(<HelloComponent2 name="Lc"/>,document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
