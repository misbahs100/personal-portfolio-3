import React from 'react';
import webpage1 from '../../../images/webpage1.PNG';
import webpage2 from '../../../images/webpage2.PNG';
import webpage3 from '../../../images/webpage3.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const project = {
    name: 'Webpage Service',
    img1: webpage1,
    img2: webpage2,
    img3: webpage3,
    features: [
        'Animated Service Cards',
        'Amazing Login page',
        'Different dashboards for admins and users',
        'Admin can create/ update/ delete any service',
        'Stripe payment method included to purchase any service.'
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap4', 'React.js', 'React Bootstrap', 'Material UI', 'Firebase'],
    liveSite: 'https://webpage-service.web.app/',
    github: 'https://github.com/misbahs100/webpage-service-client'
}

const WebpageService = () => {
    return (
        <div className="row w-100 container mb-5">
             {/* carousel */}
             <div className="col-md-6 card">
                                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src={project.img1} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={project.img2} class="d-block w-100" alt="..." />
                                            </div>
                                            <div class="carousel-item">
                                                <img src={project.img3} class="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                                {/* features */}
                                <div className="col-md-6">
                                    <h3 className="text-warning">{project.name}</h3>
                                    {
                                        project.features.map(feature => <li className="text-white">{feature}</li>)
                                    }
                                    <br/>
                                    <strong className="text-white">Technologies</strong> <br/>
                                    {
                                        project.technologies.map(tech => <div className="btn btn-secondary text-white mr-2 mb-2">
                                            {tech}
                                        </div>)
                                    }
                                    <br/>
                                    
                                        <a href={project.liveSite}><button className="btn my-button"><FontAwesomeIcon icon={faGlobe}/> Live</button></a>
                                        <a href={project.github}><button className="btn my-button"><FontAwesomeIcon icon={faGlobe}/> Github</button></a>
                                    
                                </div>
        </div>
    );
};

export default WebpageService;