import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import about from '../../images/about.PNG';
import PersonalInfos from '../PersonalInfos/PersonalInfos';
import Skills from '../Skills/Skills';
import ExperienceAndEducation from '../ExperienceAndEducation/ExperienceAndEducation';

const About = () => {
    return (
        <div className="about-container">
            {/* <h1 className="text-uppercase text-center"><span className="text-white">About</span> <span className="text-warning">Me</span></h1> */}
            <img src={about} alt=""/>
            <div className="row w-100">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                    <PersonalInfos></PersonalInfos>
                    <Skills></Skills>
                    <ExperienceAndEducation></ExperienceAndEducation>
                </div>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default About;