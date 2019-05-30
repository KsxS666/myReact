import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';


class Params extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
	}
	render() {
		return (
			<div>
				<WhiteSpace 
					
				/>
				<section>{this.props.match.params.date}></section>
      </div>
		)
	}
};

export default Params;