import React, {Component} from 'react';
import { WhiteSpace } from 'antd-mobile';
import qs from 'qs'

class Query extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};
  }
  componentDidMount () {
    console.log(this.props.location.search)
  }
	render() {
		return (
			<div>
				<WhiteSpace 
					
				/>
				<section>{qs.parse(this.props.location.search.slice(1)).date}></section>
      </div>
		)
	}
};

export default Query;