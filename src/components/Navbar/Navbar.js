import { faBriefcase, faComments, faEnvelopeOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
       <div className="col-md-12 d-flex align-items-center position-fixed">
            <div className="navbar-container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                {/* <div class="container-fluid "> */}
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse navbar-lists" id="navbarNav">
                        <ul class="navbar-nav d-flex flex-column ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/"><FontAwesomeIcon className="" icon={faHome}/></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"><FontAwesomeIcon icon={faUser}/></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projects"><FontAwesomeIcon icon={faBriefcase}/></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact"><FontAwesomeIcon icon={faEnvelopeOpen}/></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs"><FontAwesomeIcon icon={faComments}/></Link>
                            </li>
                        </ul>
                    </div>
                {/* </div> */}
            </nav>
        </div>
       </div>
    );
};

export default Navbar;