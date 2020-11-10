import React from "react";
import "./imagecomponent.css";
import Resume from "../../images/BenGardnerResume.png"


export default class ImageComponent extends React.Component {
  state = { isOpen: false };

  handleShowImage = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <img
          className="small-resume"
          src={Resume}
          onClick={this.handleShowImage}
          alt="no image"
        />
        {this.state.isOpen && (
          <div className="dialog">
            <img
              className="large-resume"
              src={Resume}
              onClick={this.handleShowImage}
              alt="no image"
            />
          </div>
        )}
      </div>
    );
  }
}