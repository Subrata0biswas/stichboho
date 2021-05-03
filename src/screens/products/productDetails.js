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
      productDetails: "",
      cateType:
        this.props.location.state && this.props.location.state.cateType
          ? this.props.location.state.cateType
          : "",
      subCateType:
        this.props.location.state && this.props.location.state.subCateType
          ? this.props.location.state.subCateType
          : "",
    };
  }

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.details) {
      this.setState({
        loader: false,
        productDetails: this.props.location.state.details,
      });
    } else {
      this.getProductDetails();
    }
  }

  getProductDetails = () => {
    axios
      .post(`${API}api/product_details/`, {
        productId: this.props.match.params.id,
      })
      .then((res) => {
        this.setState({ loader: false });
        if (res.data.code === 200) {
          this.setState({
            productDetails: res.data.productLists[0],
            cateType: res.data.productMainTypes,
            subCateType: res.data.productSubTypes,
          });
        } else {
          // this.callToastMessage();
        }
      })
      .catch((err) => {
        // this.callToastMessage();
      });
  };

  render() {
    const { loader, productDetails, cateType, subCateType } = this.state;
    console.log("det", this.props.location.state);
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

                  {subCateType ? <li>{subCateType}</li> : null}
                </ul>
              </div>
            </div>

            {/* product details section start */}
            {productDetails ? (
              <div className="details-outer">
                <div className="container">
                  <div className="detail-left">
                    <div className="image">
                      <img
                        src={API + productDetails.productImage}
                        alt="Product Image"
                      />
                    </div>
                    <div className="description">
                      <h2>DESVRIPTIONS</h2>
                      <p className="con">{productDetails.description}</p>
                    </div>
                  </div>
                  <div className="detail-right">
                    <h2 className="title">
                      PRODUCT NAME : {productDetails.name}
                    </h2>
                    <div className="price">
                      {" "}
                      Price: ₹ {productDetails.price}
                    </div>
                    <div className="choose-time-date">
                      <form action="#">
                        <ul>
                          <li className="date">
                            <input type="date" id="" name="date" />
                          </li>
                          <li className="time">
                            <input type="time" id="" name="time" />
                          </li>
                        </ul>
                      </form>
                    </div>
                    <div className="booking-details-outer">
                      <h2>Enter Booking Details</h2>
                      <div className="booking-frm">
                        <form>
                          <div className="booking-lable">
                            <ul>
                              <li>
                                <input
                                  type="text"
                                  id=""
                                  name="name"
                                  placeholder="Name"
                                />
                              </li>
                              <li>
                                <input
                                  type="email"
                                  id=""
                                  name="email"
                                  placeholder="Email"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="booking-lable">
                            <ul>
                              <li>
                                <input
                                  type="tel"
                                  id=""
                                  name="tel"
                                  placeholder="Contact"
                                />
                              </li>
                              <li>
                                <input
                                  type="text"
                                  id=""
                                  name="landmark"
                                  placeholder="Land Mark"
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="booking-lable address">
                            <textarea
                              id=""
                              name=""
                              placeholder="Address"
                            ></textarea>
                          </div>
                          <div className="booking-lable book-msg">
                            <textarea
                              id=""
                              name=""
                              placeholder="Booking Message"
                            ></textarea>
                          </div>
                          <div className="booking-lable submit">
                            <input type="submit" value="BOOK NOW" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <NoDataFound />
            )}
            {/* product details section end */}

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
