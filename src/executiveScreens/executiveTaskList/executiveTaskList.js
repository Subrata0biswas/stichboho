import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import base64 from "react-native-base64";

// import component
import { API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";

class ExecutiveorderList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loader: true,
      orderList: [],
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
        .post(`${API}api/executive-task/`, {
          executiveId: user.id,
          status: this.props.match.params.type,
        })
        .then((res) => {
          console.log("res", res);
          this.setState({ loader: false, user: user });
          console.log("res", res);
          if (res.data.code === 200) {
            this.setState({
              orderList: res.data.data.tasklist,
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

  toRedirect = (order) => {
    this.props.history.push("/executive/measurement", {
      order: order,
    });
  };

  render() {
    const { loader, orderList, user } = this.state;
    return (
      <main>
        {loader ? (
          <Skeleton count={10} />
        ) : orderList.length > 0 ? (
          <div className="main-border">
            <div className="dash-title">
              <h2>Field Executive Task List</h2>
              <p>
                Welcome Mr. {user.firstName} {user.lastName}
              </p>
            </div>
            <div className=" dashbord-ban">
              <img src="images/dashbord-img.jpg" alt="" />
            </div>
            <div class="main-border">
              <div class="from-list-outer">
                <div class="frm-list task-list">
                  <table>
                    <tr>
                      <th>Order Name</th>
                      <th>Address</th>
                    </tr>
                    {orderList.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td>
                            <a onClick={() => this.toRedirect(order)}>
                              {order.name}
                            </a>
                          </td>
                          <td>{order.address}</td>
                        </tr>
                      );
                    })}
                  </table>
                </div>
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

export default ExecutiveorderList;
