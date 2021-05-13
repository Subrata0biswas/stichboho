import React from "react";
import axios from "axios";
import base64 from "react-native-base64";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { loader, data, user } = this.state;
    return (
      <main>
        <div className="main-border">
          <div className="dash-title">
            <h2>User's Dashboard</h2>
            <p>Welcome Mr.</p>
          </div>
          <div className=" dashbord-ban">
            <img src="images/dashbord-img.jpg" alt="" />
          </div>
          <div className="list-product-outer dash-list">
            <div className="container">
              <ul className="pro-grid">
                <li className="active">
                  <div className="border">
                    <p>
                      New <br /> Order
                    </p>
                    <h2>1223</h2>
                  </div>
                </li>
                <li>
                  <div className="border">
                    <p>
                      Work In <br />
                      Process
                    </p>
                    <h2>120</h2>
                  </div>
                </li>
                <li>
                  <div className="border">
                    <p>
                      Completed <br /> Orders
                    </p>
                    <h2>120</h2>
                  </div>
                </li>
                <li>
                  <div className="border">
                    <p>
                      Total <br />
                      Order
                    </p>
                    <h2>120</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <span className="cut-item top-left"></span>
          <span className="cut-item left-bottom"></span>
          <span className="cut-item top-right"></span>
          <span className="cut-item right-bottom"></span>
          <span className="cut-item bottom"></span>
        </div>
      </main>
    );
  }
}

export default UserDashboard;
