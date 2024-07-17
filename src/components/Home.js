import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
    displayName = Home.name

    render() {
        return (
            <div className="Home">

                <div className="Home-content">
                    <h1>Alexei Holgate</h1>
                    <p>IT and Software Development Services Based in Newcastle upon Tyne</p>
                </div>

            </div>
        );
    }
}

export default Home;
