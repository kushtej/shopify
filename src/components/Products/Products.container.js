import { Component } from 'react';
import Products from './Products.component'

export class ProductsContainer extends Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <Products />
        )
    }
}

export default ProductsContainer