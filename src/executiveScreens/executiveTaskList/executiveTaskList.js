import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";

class ExecutiveTaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      loader: true,
      taskList: [],
    };
  }

  componentDidMount() {
    this.getExesutiveDashboardData();
    console.log("kalsdfldasf", this.props.props.match.params.type);
  }

  getExesutiveDashboardData = () => {
    const { user } = this.props; //getting form app.js
    if (user) {
      axios
        .post(`${API}api/executive-task/`, {
          executiveId: user.id,
          status: this.props.props.match.params.type,
        })
        .then((res) => {
          console.log("list res", res);
          this.setState({ loader: false, user: user });
          if (res.data.code === 200) {
            this.setState({
              taskList: res.data.data.tasklist,
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

  toRedirect = (list) => {
    this.props.props.history.push("/executive/measurement", {
      client: list,
    });
  };

  render() {
    const { loader, taskList, user } = this.state;
    return (
      <main>
        {loader ? (
          <Skeleton count={10} />
        ) : taskList.length > 0 ? (
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
            {taskList.map((list) => {
              return (
                <div
                  key={list.id}
                  style={{
                    // flexDirection: "row",
                    alignItems: "center",
                  }}
                  onClick={() => this.toRedirect(list)}
                >
                  <div
                    style={{
                      backgroundColor: "gray",
                      padding: 5,
                      marginBottom: 8,
                    }}
                  >
                    {list.name}
                  </div>
                </div>
              );
            })}

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

export default ExecutiveTaskList;
