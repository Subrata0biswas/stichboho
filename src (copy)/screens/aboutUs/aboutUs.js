import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cms about">
        <div className="about-us-outer">
          <div className="about-title">
            <h2 className="title">About Us</h2>
          </div>
          <div className="container">
            <div className="about-inr-con">
              <div className="left-img img">
                <img src="../../assets/images/about-left-img.jpeg" alt="" />
              </div>
              <div className="con">
                Raho Ban Than Ke is an online stitching service providing
                platform helping customersto avail tailoring services at the
                comfort of their home. Our goal is to make sure you are always
                Ban Than Ke. Aiming to be India’s Largest E-Tailoring platform,
                we provide our customers with a hassle free way to select
                fabrics and get stitched in the manner they desire.
              </div>
            </div>
            <div className="why-stitch-buhu">
              <div className="why-title about-title">
                <h2 className="title">WHY STITCHBOHO </h2>
              </div>
              <div className="why-option">
                <div className="why-items ontime">On Time</div>
                <div className="why-items quality">Quality</div>
                <div className="why-items trust">Trust</div>
                <div className="why-items hpy-clint">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
