import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class About extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="About-container">
                <h1>About Us</h1>
                <p> This is About Us page</p>
            </div>
        )
       
    }

}

export default About;
