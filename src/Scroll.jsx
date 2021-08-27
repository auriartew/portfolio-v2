import React, { useLayoutEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Scroll() {
  const [show, doShow] = useState({itemOne: false});
  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = element => element.getBoundingClientRect().top;
    const div1Pos = topPos(ourRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow(state => ({ ...state, itemOne: true }));
      } 
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
    }, []);
    
    return (
        <>
            <Div animate={show.itemOne} ref={ourRef}>
            I'm a psychology major turned front-end developer 
            with a passion for transforming the psychological principles
            of cognition, sensation, and perception
            into beautiful user experiences.
            </Div>
        
        </>
    );
};

const Div = styled.div`
    transform: translateY(${({ animate }) => (animate ? "0" : "-50%")});
    transition: transform  1.5s 0.5s ease-out;
    font-size: 1.8rem;
`;

