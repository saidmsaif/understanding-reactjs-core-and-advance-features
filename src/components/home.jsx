import React, { Component } from 'react'
import About from './about';

export default class Home extends Component {
    state = {
        name: 'Saif',
        birth_day: '15 May 1998'
    }

    render() {
        return (
			<div>
				<About name={this.state.name} bdate={this.state.birth_day}></About>
			</div>
		);
    }
}
