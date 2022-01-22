import React from 'react';
import '../../dist/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import brandLogo from '../../img/brand-logo1.png';
import googleLogo from '../../img/google-logofinal.png';


export default function sign_in () {
    return (
        <div className = "login-container">
            <div className = "login-wrapper">
                <div className = "flex">
                    <div className = "col-section-1">
                        <div className = "title">
                            <img src = {brandLogo} alt = "brand Logo" />
                            <h1>Welcome to Fandom Web</h1>
                            <p>Become part of the Society</p>
                            <h6>Join the Fanbase Community now. </h6>
                        </div>
                    </div>
                    <div className = "col-section-2">
                        <div className = "login-header">
                            <h1>Log in</h1>
                           
                        </div>
                        <div className = "form-group">
                            <label>Email</label>
                            <input type = "email" placeholder = "Enter Your Email" className = "form-control log"  />
                        </div>
                        <div className = "form-group">
                            <label>Password</label>
                            <input type = "password" placeholder = "Enter Your Password" className = "form-control" />
                        </div>
                        
                        <button className = "btn btn-success" type = "submit">Login</button>   
                        <div className = "ptext">
                            <p>Or login with</p>
                            <a className = "google-login"><img src = {googleLogo} alt = "google-logo" /> Sign in with Google</a>
                            <p>Don't have account?   <Link to = "/register" className = "register">Register Now</Link></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}