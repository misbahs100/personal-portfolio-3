import React from 'react';
import highway1 from '../../../images/highway1.PNG';
import highway2 from '../../../images/highway2.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import GitHubIcon from '@material-ui/icons/GitHub';

const project = {
    name: 'Highway Transport',
    img1: highway1,
    img2: highway2,
    features: [
        'User can select any travel transport',
        'Activated private route system',
        'User can see Google Map while providing destination address'
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap4', 'React.js', 'React Bootstrap', 'Material UI', 'Firebase'],
    liveSite: 'https://highway-transporter.web.app/',
    github: 'https://github.com/misbahs100/highway-transport'
}

const HighwayTransport = () => {
    return (
        <div className="row w-100 container mb-5 ml-auto">
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
                    </div>
                    <button class="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                    <button class="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden"></span>
                    </button>
                </div>
            </div>
            {/* features */}
            <div className="col-md-6">
                <h3 className="text-warning">{project.name}</h3>
                {
                    project.features.map(feature => <li className="text-white">{feature}</li>)
                }
                <br />
                <strong className="text-white">Technologies</strong> <br />
                {
                    project.technologies.map(tech => <div className="btn btn-secondary text-white mr-2 mb-2">
                        {tech}
                    </div>)
                }
                <br />

                <a href={project.liveSite}><button className="my-button mb-2"><FontAwesomeIcon icon={faGlobe} /> Live</button></a>
                <a href={project.github}><button className="my-button"><GitHubIcon></GitHubIcon> Github</button></a>

            </div>
        </div>
    );
};

export default HighwayTransport;