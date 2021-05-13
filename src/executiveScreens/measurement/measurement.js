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

        <div class="main-border">
          <div class="contact-container cms-con mesurement">
            <h2 class="title">Measurement</h2>
            <div class="contact-frm-outer mesurement-outer">
              <form action="#">
                <ul>
                  <li class="men-drop">
                    <select>
                      <option>Men</option>
                      <option>Women</option>
                    </select>
                  </li>
                  <li class="category-drop">
                    <label>Category</label>
                    <select>
                      <option>Pant</option>
                      <option>Pant 1</option>
                      <option>Pant 2</option>
                    </select>
                  </li>
                  <li class="sub-category-drop">
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
                  <li class="submit-outer">
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
