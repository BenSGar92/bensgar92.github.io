import React from "react";
import Hero from "../components/Hero"

function Main() {
    return(
        <div>
            <Hero backgroundImage="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260">
                <h1>About Me</h1>
                <h2>My name is Ben Gardner and I am a recently displaced management professional due to Covid-19.</h2>
                <h2>My ambition has always been to learn the languages of the programming world and put them to use to grow my career and help others.</h2>
                <h2>This portfolio will showcase the skills that I have developed since taking on coding as a career change.</h2>
                <h2>Please see the tab above for my portfolio page and the links to the right for my attached LinkedIn profile and resume.</h2>
            </Hero>
        </div>
    );
}

export default Main;