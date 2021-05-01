import React from 'react';
import Navbar from '../Navbar/Navbar';
import pic from '../../images/pic.PNG';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="row d-md-flex w-100">
                <div className="col-md-5 d-md-flex d-none">
                    <img src={pic} alt=""/>
                </div>

                <div className="col-md-6 d-flex align-items-center">
                    <div>
                    <h1 className="text-uppercase text-warning">- I'm Misbah Uddin. <br/> <span className="text-white"> Web developer</span></h1>
                    <p className="text-white">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <button className="text-uppercase btn my-button">Download my resume</button>
                    <button className="text-uppercase btn my-button">More about me</button>
                    </div>
                </div>
                
             
               <Navbar></Navbar>
               
                
               
            </div>
        </div>
    );
};

export default Home;