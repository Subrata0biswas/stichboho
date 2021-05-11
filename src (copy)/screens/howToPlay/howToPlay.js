import React from "react";

class HowToPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cms about">
        <div className="about-us-outer">
          <div className="about-title">
            <h2 className="title">HOW TO PAY</h2>
          </div>
          <div className="container">
            <div className="about-inr-con how-to-pay-con">
              <div className="left-img img">
                <img src="assets/images/how-to-pay-left-img.jpg" alt="" />
              </div>
              <div className="con">
                <p>
                  You would be required to pay only for the fabric at our
                  representative’s visit to you
                </p>
                <p>
                  Final payment needs to be made after the trial has been
                  provided to you.{" "}
                </p>
                <p>All online modes of payments will be accepted. </p>
              </div>
            </div>
            <div className="why-stitch-buhu">
              <div className="why-title about-title">
                <h2 className="title">WHY STITCH BOHO </h2>
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

export default HowToPlay;
