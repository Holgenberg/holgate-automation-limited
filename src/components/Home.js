import React, { Component } from 'react'
import "@fontsource/roboto-slab";
import './Home.css'
import SocialFollow from './SocialFollow';

class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="Home">

                <div className="Home-content">
                    <h1>Alexei Holgate</h1>
                    <p>IT and Software Development Services Based in Newcastle upon Tyne</p>
                </div>

                <SocialFollow/>

            </div>
        );
    }
}

export default Home;
