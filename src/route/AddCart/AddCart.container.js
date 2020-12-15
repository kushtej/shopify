import { Component } from 'react';
import AddCart from './AddCart.component'

export class AddCartContainer extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
                <AddCart/>
        )
    }
}

export default AddCartContainer