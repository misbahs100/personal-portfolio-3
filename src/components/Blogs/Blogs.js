import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Blogs.css';
import blogsBg from '../../images/blogBg.PNG';

const Blogs = () => {
    return (
        <div className="blogs-container">
            <img src={blogsBg} alt=""/>
            <div className="row w-100">
                <div className="col-md-1"></div>
                <div className="col-md-10"></div>
                <div className="col-md-1" style={{ marginTop: '10%' }}>
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Blogs;