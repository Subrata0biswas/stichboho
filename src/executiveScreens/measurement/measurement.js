import React from "react";
import axios from "axios";
import base64 from "react-native-base64";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";
import NoDataFound from "../../components/noDataFound/noDataFound";
import { ReactReduxContext } from "react-redux";

class Measurement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      client: this.props.props.location.state
        ? this.props.props.location.state.client
        : "",
      types: [],
      selectedType: "",
      category: [],
    };
  }
  componentDidMount() {
    this.getCategory();
  }

  getCategory = () => {
    Service("GET", "api/homepage/", "").then((res) => {
      this.setState({ loader: false });
      console.log("mes res", res);
      if (res.data.code === 200) {
        this.setState({
          types: res.data.Category,
        });
      } else {
        Toast({
          type: res.data.status || "error",
          message: res.message || res.data.message,
        });
      }
    });
  };

  onChangeGetCategory = (evt, field) => {
    this.setState(
      {
        [evt.target.name]: evt.target.value,
      },
      () => {
        axios
          .post(API + "api/subcategory", {
            categoryId: this.state[evt.target.name],
          })
          .then((res) => {
            if (res.data.code === 200) {
              this.setState({
                [field]: res.data.subCategory,
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
            Toast({
              type: "error",
              message: errMsg.message,
            });
          });
      }
    );
  };

  render() {
    const { firstName, lastName } = this.props.user; //getting props from app .js in route
    const { client, loader, types, selectedType, category } = this.state;
    console.log("measurement", category);
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

        <div className="main-border">
          <div className="contact-container cms-con mesurement">
            <h2 className="title">Measurement</h2>
            <div className="contact-frm-outer mesurement-outer">
              <form>
                <ul>
                  {/* TYPE SECTION START */}
                  {types.length > 0 ? (
                    <li className="men-drop">
                      <label style={{ fontWeight: "bold" }}>Type</label>
                      <select
                        name="selectedType"
                        onChange={(evt) =>
                          this.onChangeGetCategory(evt, "category")
                        }
                      >
                        <option value="">Select type</option>
                        {types.map((type) => {
                          return (
                            <option key={type.id} value={type.id}>
                              {type.name}
                            </option>
                          );
                        })}
                      </select>
                    </li>
                  ) : null}
                  {/* TYPE SECTION END */}

                  <li className="category-drop">
                    <label>Category</label>
                    <select>
                      <option>Pant</option>
                      <option>Pant 1</option>
                      <option>Pant 2</option>
                    </select>
                  </li>
                  <li className="sub-category-drop">
                    <label>Sub Category</label>
                    <select>
                      <option>Pant</option>
                      <option>Pant 1</option>
                      <option>Pant 2</option>
                    </select>
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="belt"
                      placeholder="Belt Loop"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="wast-belt"
                      placeholder="Waist Belt"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="fly-piece"
                      placeholder="Fly piece/zipper fly"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="back-pocket"
                      placeholder="Back Pocket"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="cross"
                      placeholder="Cross/Crutch Point"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="under-side"
                      placeholder="Under Side"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="top-side"
                      placeholder="Top Side"
                    />
                  </li>
                  <li>
                    <input
                      type="text"
                      id="#"
                      name="leg-opening"
                      placeholder="Leg Opening"
                    />
                  </li>

                  <li>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Comments"
                      style={{ height: 200 }}
                    ></textarea>
                  </li>
                  <li className="submit-outer">
                    <input type="submit" value="Finish" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Measurement;
