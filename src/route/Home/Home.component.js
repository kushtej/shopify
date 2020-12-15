import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Home extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="Home-container">
                <h1>Welome to Shopify!</h1>
            </div>
        )
       
    }

}

export default Home;
