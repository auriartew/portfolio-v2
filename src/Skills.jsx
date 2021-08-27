import React from "react";

export default function Skills() {
    return (
        <div className="skill-container">
            <h3 className="skill-heading">Skills I've been working on</h3>
            <p className="skill-info">As a junior developer, I am relentlessly working on improving my chops.
                Most of my focus has been centered on the MERN stack.
            </p>
            <div className="detailed-skills">
                <h2 className="skill-subheading">Front-end</h2>
                <div className="items">
                    <div className="column">
                        <p>HTML5</p>
                        <div class="skill-bar">
                            <div class="skills html">90%</div>
                        </div>
                        <p>JavaScript</p>
                        <div class="skill-bar">
                            <div class="skills js">85%</div>
                        </div>
                        <p>CSS</p>
                        <div class="skill-bar">
                            <div class="skills css">80%</div>
                        </div>
                        
                        
                    </div>
                    <div className="column">
                        
                        
                        <p>ReactJs</p>
                        <div class="skill-bar">
                            <div class="skills react">70%</div>
                        </div>
                        
                        <p>jQuery</p>
                        <div class="skill-bar">
                            <div class="skills jquery">60%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detailed-skills">
                <h2 className="skill-subheading">Back-end</h2>
                <div className="items">
                    <div className="column">
                        <p>Nodejs</p>
                        <div class="skill-bar">
                            <div class="skills nodejs">70%</div>
                        </div>
                        <p>Microsoft Azure</p>
                        <div class="skill-bar">
                            <div class="skills azure">50%</div>
                        </div>
                    </div>
                    <div className="column">
                        <p>Express</p>
                        <div class="skill-bar">
                            <div class="skills express">50%</div>
                        </div>
                        <p>MongoDB</p>
                        <div class="skill-bar">
                            <div class="skills mongodb">80%</div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="detailed-skills">
                <div className="items">
                <h2 className="">Development Tools</h2>
                
                    <div className="column">
                        
                        <p>VS Code with Azure integration</p>
                        <p>Github</p>
                    </div>
                
            
                </div>
            </div>
        </div>
    )
}