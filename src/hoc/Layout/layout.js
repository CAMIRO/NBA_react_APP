import React, { Component } from 'react'
import './layout.css'
import Header from '../../components/Header/header'

export default class layout extends Component {
    state = {

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Header/>
                {this.props.children}
                Fotter
            </div>
        )
    }
}
