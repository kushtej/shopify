import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Products extends Component{

    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className="Products-container">
                <h1>Our Item!</h1>
            </div>
        )
       
    }

}

export default Products;
