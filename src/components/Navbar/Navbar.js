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
        <div className="navbar-container">

            <div className="d-md-none d-block">
                <Menu className="bg-secondary" menuButton={<MenuButton className="bg-warning btn ml-4"><FontAwesomeIcon className="" icon={faBars} /></MenuButton>}>
                    <MenuItem><Link to="/"><button className="btn text-warning">Home</button></Link></MenuItem>
                    <MenuItem><Link to="/about"><button className="btn text-warning">About</button></Link></MenuItem>
                    <MenuItem><Link to="/projects"><button className="btn text-warning">Projects</button></Link></MenuItem>
                    <MenuItem><Link to="/contact"><button className="btn text-warning">Contact</button></Link></MenuItem>
                    <MenuItem><Link to="/blogs"><button className="btn text-warning">Blogs</button></Link></MenuItem>
                </Menu>
            </div>


            <div className="d-md-flex align-items-center d-none">
                <nav class="navbar navbar-expand-lg navbar-light nav-btn">
                    {/* <div class="container-fluid "> */}

                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon className="text-white" icon={faBars} />
                    </button>
                    <div class="collapse navbar-collapse navbar-lists" id="navbarNav">
                        <ul class="navbar-nav d-flex flex-column ml-auto">
                            <li class="nav-item">
                            <Link class="nav-link active" to="/">
                                <div className="test-li btn"><small>Home</small></div>
                                <FontAwesomeIcon className="test-fa" icon={faHome} /> </Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/about">
                            <div className="test-li btn"><small>About</small></div>
                            <FontAwesomeIcon className="test-fa" icon={faUser} /></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/projects">
                            <div className="test-li btn"><small>Projects</small></div>
                                <FontAwesomeIcon className="test-fa" icon={faBriefcase} /></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/contact">
                            <div className="test-li btn"><small>Contact</small></div>
                                <FontAwesomeIcon className="test-fa" icon={faEnvelopeOpen} /></Link>
                            </li>
                            <li class="nav-item">
                            <Link class="nav-link" to="/blogs">
                            <div className="test-li btn"><small>Blogs</small></div>
                                <FontAwesomeIcon className="test-fa" icon={faComments} /></Link>
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