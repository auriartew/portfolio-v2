import React from 'react';

export default function Projects() {


    return (
        <React.Fragment>
            <div className="projects" id="projects">
                <h2>Projects</h2>
                <div className="projects-container">
                    <div className="row">
                        <div className="project">
                            <div className="top">
                                <p>Immigration Information Website</p>
                                <a href="http://uriartevisa.com" target="_blank">
                                    <button className="buttonfx">Visit website</button>
                                    </a>
                            </div>
                            
                            <div className="back"></div>
                            
                        </div>
                        <div className="project">
                            <div className="top">
                                <p>Ancestry Site</p>
                                <a href="https://lively-hill-0d8298410.azurestaticapps.net/" target="_blank">
                                    <button className="buttonfx">Visit website</button>
                                    </a>
                            </div>
                            <div className="back"></div>
                        </div>
                        <div className="project">
                            <div className="top">
                                <p>Portfolio Site</p>
                                <a href="https://auportfolio.netlify.app/" target="_blank">
                                    <button className="buttonfx">
                                        Visit website  
                                    </button>
                                </a>
                            </div>
                            <div className="back"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="project-description">
                            <h3>Uriarte Visa</h3>
                            <p>Hosted in an EC2 container on AWS.
                            Front end developed with React, CSS, and Material UI</p>
                        </div>
                        <div className="project-description">
                            <h3>Genealogy Site</h3>
                            <p>Single-page application using the MERN stack and hosted in Azure</p>
                        </div>
                        <div className="project-description">
                            <h3>Portfolio Site</h3>
                            <p>Single-page application built with React and custom CSS</p>
                        </div>

                    </div>
                    

                
                        
                        

                    
                </div>
            </div>
        </React.Fragment>
    )
}