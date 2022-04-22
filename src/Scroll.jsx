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
            I'm an analytical UX/UI designer from South Florida.
            I design and build modern functional websites
            custom fit for each client's needs. I pay special
            attention to the end user's esperience by creating
            simple and intuitive user flows that 
            effortlessly guide users from point A to point B.
            </Div>
        
        </>
    );
};

const Div = styled.div`
    transform: translateY(${({ animate }) => (animate ? "0" : "-50%")});
    transition: transform  1.5s 0.5s ease-out;
    font-size: 1.8rem;
`;

