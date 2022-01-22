import React from "react";
import './dist/index.css';
import './App.css';
import './dist/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routing from './route';



function App () {
  return (
    <div>
      <Routing />      
      <div className = "main-footer">
        <div className = "footer-container">
          <div className = "row">
            <div className = "col">
              <h4>Fandom Web</h4>
              <ul class = "list-unstyled">
                <li>125-1452-042</li>
                <li>Misamis Oriental Mindano, Philippines</li>
                <li>Gingoog City, Guno Cuerdo St.</li>
              </ul>
            </div>
            <div className = "col">
              <h4>STUFF</h4>
              <ul className = "list-unstyled">
                <li>Devstock</li> 
                <li>Otakus</li> 
                <li>Koreabo</li>
              </ul>
            </div>
            <div className = "col">
              <h4>Social</h4>
              <ul className = "list-unstyled">
                <li><i className = "fab fa-facebook"></i> Facebook</li> 
                <li><i className = "fab fa-instagram"></i> Instagram</li> 
                <li><i className = "fab fa-twitter"></i> Twitter</li>
              </ul>
            </div>
          </div>
          <hr />
          <div className= "row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Fandom Web | All right Reserved | Terms of Service | Privacy
            </p>
          </div>
        </div>
      </div> 
    </div>
  );
}


export default App;