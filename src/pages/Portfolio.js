import React, { useRef, useEffect } from "react";
import { TimelineLite } from 'gsap';
import "./portfolio.css"
import image1 from "../images/password-generator.png"
import image2 from "../images/workday-planner.png"
import image3 from "../images/weather-dashboard.png"
import image4 from "../images/city-sidekick.png"
import image5 from "../images/burger-eater.png"
import image6 from "../images/quikcode.png"

function Portfolio() {
    let image1left = useRef(null)
    let image2right = useRef(null)
    let image3left = useRef(null)
    let image4right = useRef(null)
    let image5left = useRef(null)
    let image6right = useRef(null)
    let tl = new TimelineLite({delay: .8});
  
    useEffect(() => {
        tl.from(image1left, { duration: 1, x: '-200%', ease: 'bounce'})
        tl.from(image2right, { duration: 1, x: '200%', ease: 'bounce'})
        tl.from(image3left, { duration: 1, x: '-200%', ease: 'bounce'})
        tl.from(image4right, { duration: 1, x: '200%', ease: 'bounce'})
        tl.from(image5left, { duration: 1, x: '-200%', ease: 'bounce'})
        tl.from(image6right, { duration: 1, x: '200%', ease: 'bounce'})
        

        
        })

    return(
        <div>
            <div className="card">
                <div className="card-body text-primary text-center bg-dark">
                Application and Project Portfolio
                </div>
            </div>


            <div className="container pb-5 mb-5">
                <div className="row">
                    <div ref={el => image1left = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://bensgar92.github.io/Password-Generator/" target="_blank"><img className="card-img-top" src={image1} alt="Card image cap"/></a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Password Generator</div>
                        </div>
                    </div>
                    <div ref={el => image2right = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                        <a href="https://bensgar92.github.io/Workday-Planner/" target="_blank"><img className="card-img-top" src={image2} alt="Card image cap"/></a>
                        <div className="card-body text-primary bg-dark rgba-black-light p-2">Workday Planner</div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div ref={el => image3left = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://bensgar92.github.io/Weather-Dashboard/" target="_blank"><img className="card-img-top" src={image3} alt="Card image cap"/></a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Weather Dashboard</div>
                        </div>
                    </div>
                    <div ref={el => image4right = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://johngarcia144.github.io/city-sidekick/" target="_blank"><img className="card-img-top" src={image4} alt="Card image cap"/></a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">City Sidekick - Group Project</div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div ref={el => image5left = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://stark-island-93829.herokuapp.com/" target="_blank"><img className="card-img-top" src={image5} alt="Card image cap"/></a>

                            <div className="card-body text-primary bg-dark rgba-black-light p-2">Burger Eater</div>
                        </div>
                    </div>
                    <div ref={el => image6right = el} className="d-flex justify-content-center col-sm-12 col-md-12 col-lg-6">
                        <div className="card">
                            <a href="https://group-1-repo.herokuapp.com/" target="_blank"><img className="card-img-top" src={image6} alt="Card image cap"/></a>
                            <div className="card-body text-primary bg-dark rgba-black-light p-2">QuikCode - Group Project</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;