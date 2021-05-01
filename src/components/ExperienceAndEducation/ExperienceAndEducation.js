import React from 'react';
import './ExperienceAndEducation.css';

const expEdus = [
    { time: '2018-present', title: 'B.Sc. Engineering', organization: 'University of Chittagong', desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt' },
    { time: '2018-present', title: 'B.Sc. Engineering', organization: 'University of Chittagong', desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt' },
]

const ExperienceAndEducation = () => {
    return (
        <div className="edu-container mt-5 mb-5">
            <h2 className="text-center text-uppercase text-white mt-5 mb-5">Experience & education</h2>
            <div className="row container">
                {
                    expEdus.map(expEdu => <div className="col-md-6" style={{borderLeft: '1px solid gold'}}>
                        <small  className="text-white">{expEdu.time}</small>
                        <h4 className="text-white"><strong>{expEdu.title}</strong> <small>- {expEdu.organization}</small></h4>
                        <p className="text-white">{expEdu.desc}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExperienceAndEducation;