import React from 'react';

export default function Introduction() {
    return (
        <React.Fragment>
        <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
                <div></div>
            </div>
            <div className="menu">
            <div>
                <div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>

        <header className="showcase" id="home">
            <div className="container showcase-inner">
            <h1>Hi, I am <span className="name">Angelina</span>. I'm a Web Developer and Designer</h1>
            <a href="#about" className="btn">Read More</a>
            </div>
        </header>
        
        </React.Fragment>
    );
}