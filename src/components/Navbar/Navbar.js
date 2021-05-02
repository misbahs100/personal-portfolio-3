import { faBars, faBriefcase, faComments, faEnvelopeOpen, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

const Navbar = () => {
    return (
        <div className="dddd">

            <div className="d-md-none d-block">
                <Menu menuButton={<MenuButton><FontAwesomeIcon className="" icon={faBars} /></MenuButton>}>
                    <MenuItem><Link to="/"><button className="btn">Home</button></Link></MenuItem>
                    <MenuItem><Link to="/about"><button className="btn">About</button></Link></MenuItem>
                    <MenuItem><Link to="/projects"><button className="btn">Projects</button></Link></MenuItem>
                    <MenuItem><Link to="/contact"><button className="btn">Contact</button></Link></MenuItem>
                    <MenuItem><Link to="/blogs"><button className="btn">Blogs</button></Link></MenuItem>
                </Menu>
            </div>


            <div className="navbar-container d-md-block d-none">
                <nav class="navbar navbar-expand-lg navbar-light nav-btn">
                    {/* <div class="container-fluid "> */}

                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className="text-white" icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse navbar-lists" id="navbarNav">
                        <ul class="navbar-nav d-flex flex-column ml-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" to="/"><FontAwesomeIcon className="" icon={faHome} /> </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"><FontAwesomeIcon icon={faUser} /></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projects"><FontAwesomeIcon icon={faBriefcase} /></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact"><FontAwesomeIcon icon={faEnvelopeOpen} /></Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs"><FontAwesomeIcon icon={faComments} /></Link>
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