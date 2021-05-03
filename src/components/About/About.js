import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css';
import about from '../../images/about.PNG';
import PersonalInfos from '../PersonalInfos/PersonalInfos';
import Skills from '../Skills/Skills';
import ExperienceAndEducation from '../ExperienceAndEducation/ExperienceAndEducation';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="about-container">
            <Fade bottom>
                {/* <h1 className="text-uppercase text-center"><span className="text-white">About</span> <span className="text-warning">Me</span></h1> */}
                <div><img className="mb-5" src={about} alt="" /></div>
                <div className="row w-100 about-row" style={{ marginLeft: '1px'}}>
                    <div className="col-md-1"></div>
                    <div className="col-md-10" style={{ }}>
                        <PersonalInfos></PersonalInfos>
                        <Skills></Skills>
                        <ExperienceAndEducation></ExperienceAndEducation>
                    </div>
                    {/* <Navbar></Navbar> */}
                    <div className="col-md-1" style={{  }}>
                        <Navbar></Navbar>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default About;