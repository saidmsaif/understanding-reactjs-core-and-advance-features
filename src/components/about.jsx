import React, { Component } from 'react'

export default class About extends Component {
    
    render() {
        return (
			<div>
				<h1>{this.props.name}</h1>
				<h1>{this.props.bdate}</h1>
			</div>
		);
    }
}
