import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddCart extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="AddCart-container">
                <h1>Your Items!</h1>
            </div>
        )
       
    }

}

export default AddCart;
