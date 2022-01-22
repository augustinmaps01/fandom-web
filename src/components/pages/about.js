import React from 'react';
import mypic from '../../img/123467.jpg';
import '../../dist/about.css';
import ReactLogo from '../../img/logo192.png';
import hmtlLogo from '../../img/html-logo.png';
import cssLogo from '../../img/cs-log.png';
import nodeLogo  from '../../img/nodejs.png';
import bootstrapLogo from '../../img/bootstrap.png';
import mdbLogo from '../../img/mdb.png';
import djangoLogo from '../../img/django.png';
import javascriptLogo from '../../img/javascript.png';
export default function about () {
    return (
    
      <div className  = "container">
       
        <div className = "flex">
            <div className = "wrapper">
                <div class = "image-wrap">
                    <img src = {mypic} alt = "mypic" />
                </div>     
            </div>
            <div class = "wrapper">
               <div className= "content-text">
                    <h3>WEB DEVELOPER</h3>
                    <h2>I'M <span className = "tname">AUGUSTIN C. MAPUTOL</span></h2>
                    <p>
                        The content of this website is about being a fan
                        of stuffs when you have free time and this was my hobbies. 
                        I created this Website because it helps me to improve my ideas, creativity in designing a
                         website also the content. 
                     </p>
               </div>
            </div>
            <div className = "wrapper">   
                <div className = "content-info">
                    <h3>Name: <span className = "t-data"> Augustin C. Maputol</span></h3>
                    <h3>Date of Birth: <span className = "t-data">August 1 1997</span></h3>
                    <h3>Address: <span className = "t-data">Barnagay 09 Guno Cuerdo st. Gingoog City</span></h3>
                    <h3>Phone: <span className = "t-data">092-245-8524</span></h3>
                    <h3>Email: <span className = "t-data"> augustin.projectdev123@gmail.com</span></h3>
                    <h3>Website: <span className = "t-data">fandomweb.org</span></h3>
                </div>
            </div>
        </div> 
        <div className = "section">
            <h1 className = "title-font">Tools/Services</h1>
            <div class = "flex">
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {hmtlLogo} alt = "css" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {cssLogo} alt = "css" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {javascriptLogo} alt = "javascript" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {bootstrapLogo} alt = "bootstrap" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {mdbLogo} alt = "mdb" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {ReactLogo} alt = "React" />
                    </div>
                </div>
                <div className = "section-wrap">
                    <div className = "logo-img">
                        <img src = {nodeLogo} alt = "node js" />
                    </div>
                </div>
                <div className =  "section-wrap">
                    <div className = "logo-img">
                        <img src = {djangoLogo} alt = "django" />
                    </div>
                </div> 
            </div>
        </div>
      </div>
      
    
     
    
    );
}