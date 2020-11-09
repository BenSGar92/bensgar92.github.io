import React, {useRef, useEffect} from "react";
import {TweenMax, TimelineLite, Power3} from 'gsap';
import "./main.css";
//assets
import mainImage from "../images/mainImage.jpeg"


function Main() {
    let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({delay: .8});

        useEffect(() => {
            //image var
            const mainImage1 = images.firstElementChild;
            //content var for lines of text
            const content1 = content.children[0]
            const content2 = content.children[1]
            const content3 = content.children[3]
            const content4 = content.children[5]
            const content5 = content.children[7]

            //image animation
            tl.from(mainImage1, 1.2, {y: 1280, ease: Power3.easeOut}, 'Start')
                .from(mainImage1.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)

            //content animation
            tl.staggerFrom([content1.children], 1, {
                y: 44,
                ease: Power3.easeOut,
                delay: .8
            }, .15, 'Start')
            .from([content1], 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
            .from([content2, content3, content4, content5], 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 2.4)
        })





    return(
        <div>
            <div ref={el => images = el}>
                <img className="image" src={mainImage} />
                    <div ref={el => content = el}>
                        <h2><span>About Me:</span></h2>
                        <h2><span>My name is Ben Gardner and I am a recently displaced management professional due to Covid-19.</span></h2><br />
                        <h2><span>My ambition has always been to learn the languages of the programming world and put them to use to grow my career and help others.</span></h2><br />
                        <h2><span>This portfolio will showcase the skills that I have developed since taking on coding as a career change.</span></h2><br />
                        <h2><span>Please see the tab above for my portfolio page and the links below for my attached LinkedIn profile and resume.</span></h2>
                    </div>
            </div>
        </div>
    );
}

export default Main;