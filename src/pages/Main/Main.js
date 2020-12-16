import React from "react";
import "./main.css";
import ImageComponent from "../../components/ImageComponent/ImageComponent";

//assets
import mainImage from "../../images/mainImage.jpeg"

function Main() {

    //var for linkedin url
    const user = {
        linkedinHandle: "https://www.linkedin.com/in/ben-gardner-6567459a?trk=profile-badge"
    }


    return(
        <div className="background-gray">
            <div>
                <img className="image" src={mainImage} />
                    <div>
                        <h2><span>About Me:</span></h2>
                        <h2><span>My name is Ben Gardner and I am a recently displaced management professional due to Covid-19.</span></h2><br />
                        <h2><span>My ambition has always been to learn the languages of the programming world and put them to use to grow my career and help others.</span></h2><br />
                        <h2><span>This portfolio will showcase the skills that I have developed since taking on coding as a career change.</span></h2><br />
                        <h2><span>Please see the tab above for my portfolio page and the links below for my attached LinkedIn profile and resume.</span></h2>
                    </div>
            </div>
            {/* currently unable to add linked in tag and need to work on resume modal */}
            <div className="row background-gray">
                <div className="test screen2 col-sm-12 col-lg-6 pt-4">
                    <div>
                        <h1>Linkedin</h1>
                        <h5>(Click Below To View Profile)</h5>
                    </div>
                    <div>
                        <div className="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="ben-gardner-6567459a">
                            <a className="LI-simple-link" href={user.linkedinHandle}></a>
                        </div>
                    </div>
                </div>
                <br />
                <div className="test screen screen2 col-sm-12 col-lg-6 pt-4">
                    <div>
                        <h1>Resume</h1>
                        <h5>(Click To Enlarge)</h5>
                    </div>
                    <div>
                        <ImageComponent />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;