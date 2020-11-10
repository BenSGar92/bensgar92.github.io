import React, {useRef, useEffect, useState } from "react";
import {TweenMax, TimelineLite, Power3} from 'gsap';
import "./main.css";
import ImageComponent from "../components/ImageComponent/ImageComponent";

//assets
import mainImage from "../images/mainImage.jpeg"

function Main() {
    //var for linkedin url
    const user = {
        linkedinHandle: "https://www.linkedin.com/in/ben-gardner-6567459a?trk=profile-badge"
    }

    //gsap vars
    let images = useRef(null);
    let content = useRef(null);
    let resume = useRef(null);
    let resumeText = useRef(null);
    let linkedIn = useRef(null);
    let profileBadge = useRef(null);
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
            const resume1 = resume.children[0]
            const profileBadge1 = profileBadge.children[0]
            const resumeText1 = resumeText.children[0];
            const resumeText2 = resumeText.children[1];
            const linkedIn1 = linkedIn.children[0];
            const linkedIn2 = linkedIn.children[1]

            console.log(resume);

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
            .from([resumeText1, resumeText2], 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 2.8)
            .from([linkedIn1, linkedIn2], 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 2.8)

            .from([resume1], 1, {y: 1280, ease: Power3.easeOut}, 3)
            .from([profileBadge1], 1, {y: 1280, ease: Power3.easeOut}, 3)
        })


    return(
        <div className="background-gray">
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
            {/* currently unable to add linked in tag and need to work on resume modal */}
            <div className="row background-gray">
                <div className="test col-sm-12 col-lg-6 pt-4">
                    <div ref={el => linkedIn = el}>
                        <h1>Linkedin</h1>
                        <h5>(Click Below To View Profile)</h5>
                    </div>
                    <div ref={el => profileBadge = el}>
                        <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="ben-gardner-6567459a">
                            <a class="LI-simple-link" href={user.linkedinHandle}></a>
                        </div>
                    </div>
                </div>
                <br />
                <div className="test col-sm-12 col-lg-6 pt-4">
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                    <div ref={el => resumeText = el}>
                        <h1>Resume</h1>
                        <h5>(Click To Enlarge)</h5>
                    </div>
                    <div ref={el => resume = el}>
                        <ImageComponent />
                    </div>
                    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                </div>
            </div>

        </div>
    );
}

export default Main;