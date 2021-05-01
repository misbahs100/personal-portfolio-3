import React from 'react';
import Navbar from '../Navbar/Navbar';
import pic from '../../images/misbah.png';
import './Home.css';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import { Link } from 'react-router-dom';

const Home = () => {
    const resumeLink = 'https://drive.google.com/file/d/16O1BgxP5dAJOD7ZER32U4ZNU0zBJ_FLB/view?usp=sharing';
    return (
        <div className="home-container">
            <Fade bottom>
            <div className="row d-md-flex w-100">
                
                <div className="col-md-5 d-md-flex d-none">
                    <img src={pic} alt=""/>
                </div>
             
                
           
                
            <div className="col-md-6 d-flex align-items-center">
                    <div>
                    <h1 className="text-uppercase text-warning">- I'm Misbah Uddin. <br/> <span className="text-white"> Web developer</span></h1>
                    <p className="text-white">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    
                    <a href={resumeLink} target="_blank"><button className="text-uppercase btn my-button">Download my resume</button></a>
                    
                    <Link to="/about"><button className="text-uppercase btn my-button">More about me</button></Link>
                    </div>
                </div>
            
                
             
                <div className="col-md-1 d-flex align-items-center">
                    <Navbar></Navbar>
                </div>
               
                
               
            </div>
            </Fade>
        </div>
    );
};

export default Home;