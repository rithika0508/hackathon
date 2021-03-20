import React from 'react'
import './App.css'
import logo from './logo.jpg'
import {useHistory} from  'react-router-dom';

const Navbar = () => {
    const history=useHistory();
    return (
       <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="navbar">
                <div id="please" className="container-fluid">
                    <img src={logo} id="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button id="button1" onClick={() => history.push('/signup-investor')}>Sign-Up for Investors</button>
                            <button id="button3" onClick={() => history.push('/signup-startup')}>Sign-Up for Entrepreneurs</button>
                            <button id="button2" onClick={() => history.push('/login')} >Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div> 
    )
}

export default Navbar
