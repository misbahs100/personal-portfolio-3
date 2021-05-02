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
            <div className="mb-5"><img src={projectBanner} alt="" /></div>
            <div className="row w-100 about-row">
                <div className="col-md-1"></div>
                <div className="col-md-10  lkj">
                    <WebpageService></WebpageService>
                    <BeverageStore></BeverageStore>
                    <HighwayTransport></HighwayTransport>
                </div>

                <div className="col-md-1" style={{marginTop: '10%'}}>
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Projects;