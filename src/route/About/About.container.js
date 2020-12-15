import { Component } from 'react';
import About from './About.component'

export class AboutContainer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
                <About/>
        )
    }
}

export default AboutContainer