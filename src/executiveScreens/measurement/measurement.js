import React from "react";
import axios from "axios";
import base64 from "react-native-base64";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";

class Measurement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("/executive/measurement", this.props);
    const { firstName, lastName } = this.props.user; //getting props from app .js in route
    return (
      <main>
        <div className="main-border">
          <div className="dash-title">
            <h2>Field Executive Measurement</h2>
            <p>
              Welcome Mr. {firstName} {lastName}
            </p>
          </div>
        </div>
      </main>
    );
  }
}

export default Measurement;
