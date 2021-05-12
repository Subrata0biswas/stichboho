import React from "react";

class ExecutiveDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div class="main-border">
          <div class="dash-title">
            <h2>Field Executive Dashboard</h2>
            <p>Welcome Mr. John Doe</p>
          </div>
          <div class=" dashbord-ban">
            <img src="images/dashbord-img.jpg" alt="" />
          </div>
          <div class="list-product-outer dash-list">
            <div class="container">
              <ul class="pro-grid">
                <li class="active">
                  <div class="border">
                    <p>
                      New <br /> Order
                    </p>
                    <h2>25</h2>
                  </div>
                </li>
                <li>
                  <div class="border">
                    <p>
                      Work In <br />
                      Process
                    </p>
                    <h2>30</h2>
                  </div>
                </li>
                <li>
                  <div class="border">
                    <p>
                      Completed <br /> Orders
                    </p>
                    <h2>70</h2>
                  </div>
                </li>
                <li>
                  <div class="border">
                    <p>
                      Total <br />
                      Order
                    </p>
                    <h2>100</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <span class="cut-item top-left"></span>
          <span class="cut-item left-bottom"></span>
          <span class="cut-item top-right"></span>
          <span class="cut-item right-bottom"></span>
          <span class="cut-item bottom"></span>
        </div>
      </main>
    );
  }
}

export default ExecutiveDashboard;
