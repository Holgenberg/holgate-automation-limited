import React, { Component } from 'react'
import './Contact.css'
import SocialFollow from './SocialFollow'

class Contact extends Component {
    displayName = Contact.name

    render() {
        return (
            <div className="Contact">

                <div className="Contact-content">
                    <h3>alexeiholgate1@gmail.com</h3>
                    <p>mob: +447506586992</p>
                    <h3>Special thanks to:</h3>
                    <p>Emma's View Photography</p>
                    <p>middlerun</p>
                </div>

                <SocialFollow />
            </div>
        )
    }
}

export default Contact