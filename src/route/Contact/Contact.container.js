import { Component } from 'react';
import Contact from './Contact.component'

export class ContactContainer extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return (
                <Contact/>
        )
    }
}

export default ContactContainer