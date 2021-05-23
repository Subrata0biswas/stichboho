import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import base64 from "react-native-base64";

// import component
import { API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";

class ExecutiveDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      data: "",
      user: "",
    };
  }

  componentDidMount() {
    this.getExesutiveDashboardData();
  }

  getExesutiveDashboardData = () => {
    const getUser = window.localStorage.getItem("user");
    if (getUser) {
      let user = JSON.parse(base64.decode(getUser));
      axios
        .post(`${API}api/executive-dashboard/`, {
          executiveId: user.id,
        })
        .then((res) => {
          console.log("res", res);
          this.setState({ loader: false, user: user });
          if (res.data.code === 200) {
            this.setState({
              data: res.data.data,
            });
          } else {
            Toast({
              type: "warning",
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          let errMsg = JSON.parse(JSON.stringify(err));
          this.setState({
            loader: false,
            user: user,
          });
          Toast({
            type: "error",
            message: errMsg.message,
          });
        });
    } else {
      this.setState({
        loader: false,
      });
    }
  };

  toRedirect = (status) => {
    this.props.props.history.push(`/executive/task-list/${status}`);
  };

  render() {
    const { loader, data, user } = this.state;
    return (
      <main>
        {loader ? (
          <Skeleton count={10} />
        ) : data ? (
          <div className="main-border">
            <div className="dash-title">
              {user.type === "executive" ? (
                <h2>Field Executive Dashboard</h2>
              ) : user.type === "tailor" ? (
                <h2>Tailor Dashboard</h2>
              ) : null}
              <p>
                Welcome Mr. {user.firstName} {user.lastName}
              </p>
            </div>
            <div className=" dashbord-ban">
              <img src="images/dashbord-img.jpg" alt="" />
            </div>
            <div className="list-product-outer dash-list">
              <div className="container">
                <ul className="pro-grid">
                  <li className="active">
                    <div
                      className="border"
                      onClick={() => this.toRedirect("new")}
                    >
                      <p>
                        New <br /> Order
                      </p>
                      <h2>{data.newOrder}</h2>
                    </div>
                  </li>
                  <li>
                    <div className="border">
                      <p>
                        Work In <br />
                        Process
                      </p>
                      <h2>{data.workinProgress}</h2>
                    </div>
                  </li>
                  <li>
                    <div className="border">
                      <p>
                        Completed <br /> Orders
                      </p>
                      <h2>{data.completedOrders}</h2>
                    </div>
                  </li>
                  <li>
                    <div className="border">
                      <p>
                        Total <br />
                        Order
                      </p>
                      <h2>{data.totalOrder}</h2>
                    </div>
                  </li>

                  <li>
                    <div className="border">
                      <p>
                        Ready for <br />
                        Trail
                      </p>
                      <h2>{data.readyForTrial}</h2>
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
        ) : (
          <NoDataFound />
        )}
      </main>
    );
  }
}

export default ExecutiveDashboard;
