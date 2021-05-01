import React from 'react';
import './PersonalInfos.css';

const PersonalInfos = () => {
    return (
        <div className="row">
            {/* infos */}
            <div className="col-md-6">
                <h3 className="text-white">PERSONAL INFOS</h3> <br />
                <div className="row">
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
                <button className="text-uppercase btn my-button">Download Resume</button>
            </div>

            {/* cards */}
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="text-warning info-card-text">2<sup>+</sup></div>
                            <div className="text-white" style={{fontSize: '15px'}}>Years of Self Experience</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="card">
                            <div className="text-warning info-card-text">7<sup>+</sup></div>
                            <div className="text-white" style={{fontSize: '15px'}}>Projects</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="card">
                            <div className="text-warning info-card-text">12<sup>+</sup></div>
                            <div className="text-white" style={{fontSize: '15px'}}>Blogs</div>
                        </div>
                    </div>

                    <div className="col-md-6">
                    <div className="card">
                            <div className="text-warning info-card-text">12<sup>+</sup></div>
                            <div className="text-white" style={{fontSize: '15px'}}>Award Won</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PersonalInfos;