import React from 'react';
import '../../dist/login.css';
import brandLogo from '../../img/brand-logo1.png';


export default function Register () {
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
                            <h1>Create Account</h1>          
                        </div>
                        <div className = "form-group">
                            <label>Firstname</label>
                            <input type = "text" placeholder = "Enter Your Firstname" className = "form-control" />
                        </div>
                        <div className = "form-group">
                            <label>Lastname</label>
                            <input type = "text" placeholder = "Enter Your Lastname" className = "form-control" />
                        </div>
                        <div className = "form-group">
                        <label>Gender</label>
                            <select className = "form-control">
                                <option value = "">--Select Gender---</option>
                                <option value = "Male">Male</option>
                                <option value = "Female">Female</option>
                            </select>
                        </div>
                        <div className = "form-group">
                            <label>Email</label>
                            <input type = "email" placeholder = "Enter Your Email" className = "form-control"  />
                        </div>
                        <div className = "form-group">
                            <label>Password</label>
                            <input type = "password" placeholder = "Enter Your Password" className = "form-control" />
                        </div>
                        <div className = "form-group">
                            <label>Confirm Password</label>
                            <input type = "password" placeholder = "Enter Your Password" className = "form-control" />
                        </div>
                        
                        <button className = "btn btn-success" type = "submit">Submit</button>   
                    </div>
                </div>
                
            </div>
        </div>
    );

}