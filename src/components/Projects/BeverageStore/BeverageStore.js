import React from 'react';
import beverage1 from '../../../images/beverage1.PNG';
import beverage2 from '../../../images/beverage2.PNG';
import beverage3 from '../../../images/beverage3.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const project = {
    name: 'Beverage Store',
    img1: beverage1,
    img2: beverage2,
    img3: beverage3,
    features: [
        'Animated Cards',
        'User can order any product and check the order list',
        'Different dashboards admin',
        'Admin can create/ update/ delete any product(beverage)'
    ],
    technologies: ['HTML5', 'CSS3', 'Bootstrap4', 'React.js', 'React Bootstrap', 'Material UI', 'Firebase'],
    liveSite: 'https://beverage-store-1.web.app/',
    github: 'https://github.com/misbahs100/beverage-store-client'
}

const BeverageStore = () => {
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
                <br />
                <strong className="text-white">Technologies</strong> <br />
                {
                    project.technologies.map(tech => <div className="btn btn-secondary text-white mr-2 mb-2">
                        {tech}
                    </div>)
                }
                <br />

                <a href={project.liveSite}><button className="my-button"><FontAwesomeIcon icon={faGlobe} /> Live</button></a>
                <a href={project.github}><button className="my-button"><FontAwesomeIcon icon={faGlobe} /> Github</button></a>

            </div>
        </div>
    );
};

export default BeverageStore;