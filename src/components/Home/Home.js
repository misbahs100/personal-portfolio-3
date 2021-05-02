import React from 'react';
import Navbar from '../Navbar/Navbar';
import pic from '../../images/misbah.png';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDownload } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';

const Home = () => {
    const resumeView = 'https://drive.google.com/file/d/16O1BgxP5dAJOD7ZER32U4ZNU0zBJ_FLB/view?usp=sharing';
    const resumeDownload = 'https://drive.google.com/uc?export=download&id=16O1BgxP5dAJOD7ZER32U4ZNU0zBJ_FLB';
    return (
        <div className="home-container">
            <Fade bottom>
                <div className="row d-md-flex w-100">

                    <div className="col-md-5 d-md-flex d-none">
                        <img src={pic} alt="" />
                    </div>




                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h1 className="text-uppercase text-warning">- I'm Misbah Uddin.</h1> <h4 className="text-white">
                               <Typical
                                    steps={[
                                        'Want to be a Web Developer', 3000,
                                        'I know MERN Stack', 3000
                                        
                                    ]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                    </h4>
                            <p className="text-white">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>

                            <a href={resumeDownload} target="_blank"><button className="text-uppercase  my-button">Download my resume <FontAwesomeIcon icon={faDownload} /></button></a>

                            <Link to="/about"><button className="text-uppercase my-button">More about me <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
                        </div>
                    </div>



                    <div className="col-md-1 navbar-col">
                        <Navbar></Navbar>
                    </div>



                </div>
            </Fade>
        </div>
    );
};

export default Home;