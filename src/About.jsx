import React, { useEffect, useState, useRef } from 'react';
import Scroll from './Scroll';

export default function About() {

    return (
        <React.Fragment>
            <div className="about" id="about" >
                <div className="about-container">
                    <div className="about-box">
                        <div className="btn small-text">
                            Angelina Uriarte
                        </div>
                        <div className="about-title">
                            <h1>UI/UX <span>Designer</span></h1>
                        </div>
                                        
                        <div className="about-info" >
                                <Scroll />
                        </div>
                        <div class="row">
                            <div className="resume" target="_blank"><a href="https://www.keepandshare.com/doc21/113919/resume-2021-pdf-555k?da=y">My resume</a></div>
                            <div className="resume" target="_blank"><a href="#projects" className="">See Projects</a></div>
                        </div>
                        
                    </div> 
                </div>
                
            </div>
        </React.Fragment>
    )
}