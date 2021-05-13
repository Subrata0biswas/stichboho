import React from "react";
import base64 from "react-native-base64";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClickRedirect = (type, evt) => {
    evt.preventDefault();
    this.props.props.history.push(type);
  };

  onPressLogout = () => {
    localStorage.removeItem("user");
    this.props.props.history.replace("/");
  };

  render() {
    const { isLogin, userType } = this.props; //props getting form layout hoc component =>app.js
    return (
      <header>
        <div className="container">
          <div className="row">
            <div className="logo">
              <span className="span-cursor">
                <img
                  className="desk-top-logo"
                  src="/assets/images/logo.png"
                  alt="logo"
                />
              </span>
            </div>
            <div className="nav">
              <div className="mob-nav" onClick={() => this.props.onOpenMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <ul className={this.props.isMenu ? "nav-active" : "nav-ul"}>
                <li
                  className={
                    this.props.props.location.pathname === "/" ? "active" : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={(evt) => this.onClickRedirect("/", evt)}
                  >
                    Home
                  </span>
                </li>

                {isLogin ? (
                  <li
                    className={
                      this.props.props.location.pathname ===
                        "/executive/dashboard" ||
                      this.props.props.location.pathname === "/user/dashboard"
                        ? "active"
                        : null
                    }
                  >
                    <span
                      className="span-cursor"
                      onClick={(evt) =>
                        this.onClickRedirect(
                          userType === "user"
                            ? "/user/dashboard"
                            : "/executive/dashboard",
                          evt
                        )
                      }
                    >
                      Dashboard
                    </span>
                  </li>
                ) : null}

                <li
                  className={
                    this.props.props.location.pathname === "/about-us"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={(evt) => this.onClickRedirect("/about-us", evt)}
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
                    onClick={(evt) => this.onClickRedirect("/how-it-work", evt)}
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
                    onClick={(evt) => this.onClickRedirect("/how-to-play", evt)}
                  >
                    How To Pay
                  </span>
                </li>

                {/* <li
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
                </li> */}

                {/* <li
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
                </li> */}
                <li
                  className={
                    this.props.props.location.pathname === "/contact-us"
                      ? "active"
                      : null
                  }
                >
                  <span
                    className="span-cursor"
                    onClick={(evt) => this.onClickRedirect("/contact-us", evt)}
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
                    onClick={(evt) => this.onClickRedirect("/career", evt)}
                  >
                    Career
                  </span>
                </li>
                {isLogin ? null : (
                  <li
                    className={
                      this.props.props.location.pathname === "/login"
                        ? "active"
                        : null
                    }
                  >
                    <span
                      className="span-cursor"
                      onClick={(evt) => this.onClickRedirect("/login", evt)}
                    >
                      Login
                    </span>
                  </li>
                )}
                {isLogin ? null : (
                  <li
                    className={
                      this.props.props.location.pathname === "/registration"
                        ? "active"
                        : null
                    }
                  >
                    <span
                      className="span-cursor"
                      onClick={(evt) =>
                        this.onClickRedirect("/registration", evt)
                      }
                    >
                      Registration
                    </span>
                  </li>
                )}
                {isLogin ? (
                  <li>
                    <span
                      className="span-cursor"
                      onClick={() => this.onPressLogout()}
                    >
                      Logout
                    </span>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
