import React from "react";
// import { images } from "../../helpers/images";

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="main-border">
          <div className="eror-page cms-con">
            <div className="eror-outer">
              <h2>404</h2>
              <p>
                The link you clicked may be broken or the page may have been
                removed
              </p>
              <p>
                Visit the <a href="/">Home Page</a> Or{" "}
                <a href="/contact-us">Contact</a> me
              </p>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
export default PageNotFound;
