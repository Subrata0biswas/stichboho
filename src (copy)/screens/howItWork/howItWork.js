import React from "react";

class HowItWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cms about">
        <div className="about-us-outer">
          <div className="about-title">
            <h2 className="title">HOW IT WORKS</h2>
          </div>
          <div className="container">
            <div className="about-inr-con how-it-work-con">
              <div className="left-img img">
                <img src="assets/images/how-we-work-left-img.jpg" alt="" />
              </div>
              <div className="con">
                <p>
                  Select the product youre willing to get stitched and book an
                  appointment at your convenient time through the site.{" "}
                </p>
                <p>Our representative will visit you at the booked time. </p>
                <p>
                  He will show you a bunch of fabrics to choose from, Further
                  taking your measurements. In Case you’re willing to use your
                  own fabric, they will collect your fabric from you.{" "}
                </p>
                <p>
                  The fabric then will be stitched by our experienced Master
                  Ji’s according to the design provided by you.{" "}
                </p>
                <p>
                  Once your Product is ready, you will be visited by the
                  representative for a trail ( Not Applicable for Shirts )
                </p>
                <p>
                  In case of any changes, they will be delivered to you after
                  the same has been duly made.{" "}
                </p>
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

export default HowItWork;
