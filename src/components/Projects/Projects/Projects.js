import React from 'react';
import './Projects.css';
import projectBanner from '../../../images/portfolio.PNG';
import Navbar from '../../Navbar/Navbar';
import WebpageService from '../WebpageService/WebpageService';
import BeverageStore from '../BeverageStore/BeverageStore';
import HighwayTransport from '../HighwayTransport/HighwayTransport';

const Projects = () => {
    return (
        <div className="projects-container">
            <img src={projectBanner} alt="" />
            <div className="row w-100">
                <div className="col-md-10 m-auto">
                    <WebpageService></WebpageService>
                    <BeverageStore></BeverageStore>
                    <HighwayTransport></HighwayTransport>
                </div>

                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Projects;