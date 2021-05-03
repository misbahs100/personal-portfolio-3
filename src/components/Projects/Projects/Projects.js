import React from 'react';
import './Projects.css';
import projectBanner from '../../../images/portfolio.PNG';
import Navbar from '../../Navbar/Navbar';
import WebpageService from '../WebpageService/WebpageService';
import BeverageStore from '../BeverageStore/BeverageStore';
import HighwayTransport from '../HighwayTransport/HighwayTransport';
import Fade from 'react-reveal/Fade';

const Projects = () => {
    return (
        <div className="projects-container">
            <Fade bottom>
                <div className="mb-5"><img src={projectBanner} alt="" /></div>
                <div className="row w-100 about-row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <WebpageService></WebpageService>
                        <BeverageStore></BeverageStore>
                        <HighwayTransport></HighwayTransport>
                    </div>

                    <div className="col-md-1" style={{ }}>
                        <Navbar></Navbar>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Projects;