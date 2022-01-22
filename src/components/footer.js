import React from 'react';
import '../dist/footer.css';

export default function footer () {
    return (
        <div>
            <div className = "main-footer">
                <div className = "footer-container">
                    <div className = "row">
                        <div className = "col">
                            <h4>Fandom Web</h4>
                            <ul className = "list-unstyled">
                                <li>125-2545-525</li>
                                <li>Misamis Oriental Mindanao Philippines</li>
                                <li>Gingoog City, Guno Cuerdo St.</li>
                            </ul>
                        </div>
                        <div className = "col">
                            <h3>STUFF</h3>
                            <ul className = "list-unstyled">
                                <li>Devstock</li>
                                <li>Otakus</li>
                                <li>Koreabo</li>
                            </ul>
                        </div>
                        <div className = "col">
                            <ul className = "list-unstyled">
                                <li><i className = "fab fa-facebook"></i> Facebook</li> 
                                <li><i className = "fab fa-instagram"></i> Instagram</li> 
                                <li><i className = "fab fa-twitter"></i> Twitter</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className = "row">
                        <p className = "col-sm">
                            &copy;{new Date().getFullYear()} Fandom Web | All right Reserved | Terms of Service | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}