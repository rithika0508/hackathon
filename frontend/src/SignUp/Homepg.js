import React from 'react'
import logo from './logo.jpg'
import homepage from './homepage.png'
import about from './about.png'
import contact from './contact.png'
import Navbar from './Navbar'
import './Navbar.css'

const Homepg = () => {
    return (
        <div>
            <Navbar/>

            <div id="home">
                <img src={homepage} id="homeImg" alt="homepage"></img>
            </div>
            <div id="about">
                <img src={about} id="homeImg" alt="homepage"></img>
            </div>
            <div id="contact">
                <img src={contact} id="homeImg" alt="homepage"></img>
            </div>
        </div>
    )
}

export default Homepg