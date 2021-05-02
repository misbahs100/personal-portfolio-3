import React from 'react';
import './PersonalInfos.css';
import pic from '../../images/misbah.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const PersonalInfos = () => {
    const resumeLink = 'https://drive.google.com/file/d/16O1BgxP5dAJOD7ZER32U4ZNU0zBJ_FLB/view?usp=sharing';
    return (
        <div className="row personalInfos-container">
            {/* infos */}
            <div className="col-md-6">
                <h3 className="text-white">PERSONAL INFOS</h3> <br />
                <div style={{ height: '180px', width: '150px' }} className="d-md-none d-flex justify-content-center mx-auto"><img src={pic} alt="" /></div>
                <div className="row info-container">
                    <div className="col-md-6">
                        <p className="text-white">First Name: <strong>Misbah Uddin</strong></p>
                        <p className="text-white">Last Name: <strong>Faroque</strong></p>
                        <p className="text-white">Age: <strong>21 Years</strong></p>
                        <p className="text-white">Nationality: <strong>Bangladeshi</strong></p>
                        <p className="text-white">Freelance: <strong>Not Available</strong></p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-white">Address: <strong>Chattogram</strong></p>
                        <p className="text-white">Phone: <strong></strong></p>
                        <p className="text-white">Email: <strong></strong></p>
                        <p className="text-white">Linkedin: <strong></strong></p>
                        <p className="text-white">Languages: <strong>Bangla, English</strong></p>
                    </div>
                </div>
                <a href={resumeLink} target="_blank"><button className="text-uppercase my-button mb-5">Download resume <FontAwesomeIcon icon={faDownload} /></button></a>
            </div>

            {/* cards */}
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-warning info-card-text d-flex justify-content-center align-items-center">2<sup>+</sup></div>
                            <div className="text-white  d-flex justify-content-center align-items-center" style={{ fontSize: '15px' }}>Years of Self Experience</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-warning info-card-text  d-flex justify-content-center align-items-center">7<sup>+</sup></div>
                            <div className="text-white  d-flex justify-content-center align-items-center" style={{ fontSize: '15px' }}>Projects</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-warning info-card-text  d-flex justify-content-center align-items-center">...</div>
                            <div className="text-white  d-flex justify-content-center align-items-center" style={{ fontSize: '15px' }}>Blogs</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-warning info-card-text  d-flex justify-content-center align-items-center">...</div>
                            <div className="text-white  d-flex justify-content-center align-items-center" style={{ fontSize: '15px' }}>Award Won</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfos;