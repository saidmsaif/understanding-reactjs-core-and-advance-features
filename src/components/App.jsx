import React, { Component } from 'react'

export default class App extends Component {
    state = {
        name: this.props.name
    }

    render() {
        return (
            <div>
                <h1 className="text-center py-20 bg-red-600 font-bold text-white text-9xl">{this.state.name}</h1>
            </div>
        )
    }
}
