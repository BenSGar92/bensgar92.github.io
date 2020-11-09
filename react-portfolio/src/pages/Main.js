import React, {useRef, useEffect} from "react";
import {TweenMax, TimelineLite, Power3} from 'gsap';
import Hero from "../components/Hero"
import "./main.css";
//assets
import mainImage from "../images/mainImage.jpeg"


function Main() {
    let images = useRef(null)
    let tl = new TimelineLite({delay: .8})




        useEffect(() => {
            const mainImage1 = images.firstElementChild;





            tl.from(mainImage1, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
                .from(mainImage1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        })





    return(
        <div>
            <div ref={el => images = el}>
                <img className="image" src={mainImage} />
                    <h2><span>About Me</span></h2>
                    <h2><span>My name is Ben Gardner and I am a recently displaced management professional due to Covid-19.</span></h2><br />
                    <h2><span>My ambition has always been to learn the languages of the programming world and put them to use to grow my career and help others.</span></h2><br />
                    <h2><span>This portfolio will showcase the skills that I have developed since taking on coding as a career change.</span></h2><br />
                    <h2><span>Please see the tab above for my portfolio page and the links below for my attached LinkedIn profile and resume.</span></h2>
            </div>
        </div>
    );
}

export default Main;