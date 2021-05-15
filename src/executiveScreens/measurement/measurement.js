import React from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";

class Measurement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      client: this.props.props.location.state
        ? this.props.props.location.state.client //getting data from previous page to submit order.
        : "",
      types: [],
      // selectedType: "",
      category: [],
      // selectedCate: "",
      subCategory: [],
      measurementField: [],
    };
  }

  componentDidMount() {
    this.getCategory();
  }

  getCategory = () => {
    Service("GET", "api/homepage/", "").then((res) => {
      this.setState({ loader: false });
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
    axios
      .post(API + "api/subcategory", {
        categoryId: evt.target.value,
      })
      .then((res) => {
        this.setState({ loader: false });
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
        this.setState({ loader: false });
        Toast({
          type: "error",
          message: errMsg.message,
        });
      });
  };

  render() {
    //const { firstName, lastName } = this.props.user; //getting props from app .js in route
    const { loader, types, category, subCategory, measurementField } =
      this.state;
    return (
      <main>
        {loader ? (
          <Skeleton count={10} />
        ) : (
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
                          //name="selectedType"
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
                    {/* CATEGORY SECTION END */}
                    {category.length > 0 ? (
                      <li className="category-drop">
                        <label>Category</label>
                        <select
                          // name="selectedCate"
                          onChange={(evt) =>
                            this.onChangeGetCategory(evt, "subCategory")
                          }
                        >
                          <option value="">Select category</option>
                          {category.map((cate) => {
                            return (
                              <option key={cate.id} value={cate.id}>
                                {cate.name}
                              </option>
                            );
                          })}
                        </select>
                      </li>
                    ) : null}
                    {/* CATEGORY SECTION END */}
                    {/* SUB CATEGORY SECTION START */}
                    {subCategory.length > 0 ? (
                      <li className="sub-category-drop">
                        <label>Sub Category</label>
                        <select
                          //  name="selectedCate"
                          onChange={(evt) =>
                            this.onChangeGetCategory(evt, "measurementField")
                          }
                        >
                          <option value="">Select Sub Category</option>
                          {subCategory.map((subCat) => {
                            return (
                              <option key={subCat.id} value={subCat.id}>
                                {subCat.name}
                              </option>
                            );
                          })}
                        </select>
                      </li>
                    ) : null}
                    {/* SUB CATEGORY SECTION END */}

                    {/* MEASUREMENT SECTION START */}
                    {measurementField.length > 0 ? (
                      <li>
                        {measurementField.map((inputF) => {
                          return (
                            <input
                              type="text"
                              id="#"
                              name="belt"
                              placeholder="Belt Loop"
                            />
                          );
                        })}

                        <input type="submit" value="Finish" />
                      </li>
                    ) : null}
                    {/* MEASUREMENT SECTION END */}

                    {/*
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
              </li> */}
                  </ul>
                </form>
              </div>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Measurement;
