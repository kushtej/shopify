import { Component } from 'react';
import Home from './Home.component'

export class HomeContainer extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
                <Home/>
        )
    }
}

export default HomeContainer