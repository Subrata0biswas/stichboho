import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickRedirect = (type) => {
    this.props.props.history.push(type);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer-inr">
            <div className="footer-con">
              <h2 className="title">About Us</h2>
              <p>
                Raho Ban Than Ke is an online stitching service providing
                platform helping customersto avail tailoring services at the
                comfort of their home. Our goal is to make sure you are always
                Ban Than Ke. Aiming to be India’s Largest E-Tailoring platform,
                we provide our customers with a hassle free way to select
                fabrics and get stitched in the manner they desire.
              </p>
            </div>
            <div className="footer-con footer-link">
              <h2 className="title">Main Links</h2>
              <ul>
                <li
                  className={
                    this.props.props.location.pathname === "/" ? "active" : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/")}
                  >
                    Home
                  </span>
                </li>

                <li
                  className={
                    this.props.props.location.pathname === "/about-us"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/about-us")}
                  >
                    About US
                  </span>
                </li>
                <li
                  className={
                    this.props.props.location.pathname === "/how-it-work"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/how-it-work")}
                  >
                    How it Works
                  </span>
                </li>

                <li
                  className={
                    this.props.props.location.pathname === "/how-to-play"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/how-to-play")}
                  >
                    How To Pay
                  </span>
                </li>

                <li
                  className={
                    this.props.props.location.pathname === "/service"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/service")}
                  >
                    Services
                  </span>
                </li>
                <li
                  className={
                    this.props.props.location.pathname === "/blog"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/blog")}
                  >
                    Blog
                  </span>
                </li>
                <li
                  className={
                    this.props.props.location.pathname === "/contact-us"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/contact-us")}
                  >
                    Contact Us
                  </span>
                </li>
                <li
                  className={
                    this.props.props.location.pathname === "/career"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={() => this.onClickRedirect("/career")}
                  >
                    Career
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer-con">
              <h2 className="title">Contact Us</h2>
              <p>
                CONTACT :
                banthankeoffficial@gmail.com

                OFFICE ADDRESS :

                238, NSC BOSE ROAD,
                KOLKATA – 700040, West Bengal
                Opposite Agricultural office.
              </p>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span className="copyright-con">
            &copy; Copyright 2021 by ..........
          </span>
          <span className="recived">All rights reserved</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
