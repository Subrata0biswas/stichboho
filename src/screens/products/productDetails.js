import React from "react";
import axios from "axios";

// import component
import { API } from "../../config/service";
import NoDataFound from "../../components/noDataFound/noDataFound";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
    };
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    const { loader, products, cateType, subCateType } = this.state;
    return (
      <main>
        {loader ? (
          <div>loading...</div>
        ) : (
          <div className="main-border">
            <div className="breadcumb">
              <div className="container">
                <ul>
                  <li>
                    <span
                      className="span-cursor"
                      onClick={() => this.props.history.replace("/")}
                    >
                      Home
                    </span>
                  </li>
                  {cateType ? (
                    <li>
                      <span
                        className="span-cursor"
                        onClick={() => this.props.history.goBack()}
                      >
                        {cateType}
                      </span>
                    </li>
                  ) : null}
                  <li>{subCateType}</li>
                </ul>
              </div>
            </div>

            <span className="cut-item top-left"></span>
            <span className="cut-item left-bottom"></span>
            <span className="cut-item top-right"></span>
            <span className="cut-item right-bottom"></span>
            <span className="cut-item bottom"></span>
          </div>
        )}
      </main>
    );
  }
}

export default ProductDetails;
