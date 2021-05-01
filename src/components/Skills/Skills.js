import React from 'react';
import './Skills.css';
import html from '../../images/html2.png';
import css from '../../images/css.png';
import js from '../../images/js.png';
import react from '../../images/react-gif.gif';
import firebase from '../../images/firebase.png';
import netlify from '../../images/netlify2.jpg';
import heroku from '../../images/heroku.png';
import material from '../../images/materialUi.png';
import node from '../../images/node.png';
import mongodb from '../../images/mongodb.png';

const skills = [
    { skillName: 'HTML', skillImg: html },
    { skillName: 'MongoDB', skillImg: mongodb },
    { skillName: 'JavaScript', skillImg: js },
    { skillName: 'React', skillImg: react },
    { skillName: 'Firebase', skillImg: firebase },
    { skillName: 'Netlify', skillImg: netlify },
    { skillName: 'Heroku', skillImg: heroku },
    { skillName: 'Material UI', skillImg: material },
    { skillName: 'Node', skillImg: node },
    { skillName: 'CSS', skillImg: css }
]

const Skills = () => {

    return (
        <div className="skills-container mt-5">
            <h2 className="text-center text-white mt-5 mb-5">MY SKILLS</h2>
            <div className="row">
                {
                    skills.map(skill => <div className="col-md-3 d-flex justify-content-center mb-5">
                        <img style={{ height: '100px' }} src={skill.skillImg} alt={skill.skillName} />
                    </div>)
                }

            </div>

        </div>
    );
};

export default Skills;