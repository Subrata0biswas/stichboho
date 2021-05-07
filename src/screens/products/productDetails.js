import React from "react";
import axios from "axios";
import Modal from "react-modal";
import base64 from "react-native-base64";

// import component
import { API } from "../../config/service";
import NoDataFound from "../../components/noDataFound/noDataFound";
import Toast from "../../components/toastMessage/toast";
import LoginComponent from "../login/loginComponent";

const customStyles = {
  content: {
    top: "55%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "red",
  },
};

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      productDetails: "",
      cateType:
        this.props.location.state && this.props.location.state.cateType //got props from product list
          ? this.props.location.state.cateType
          : "",
      subCateType:
        this.props.location.state && this.props.location.state.subCateType
          ? this.props.location.state.subCateType
          : "",
      isLoginModal: false,
      date: "",
      time: "",
      name: "",
      email: "",
      contact: "",
      landMark: "",
      address: "",
      bookingMsg: "",
      isFabric: 0,
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
  };

  onClickBookNow = (evt) => {
    evt.preventDefault();
    const {
      date,
      time,
      name,
      email,
      contact,
      landMark,
      address,
      bookingMsg,
      isFabric,
      productDetails,
    } = this.state;
    const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const num = /^[0-9\b]+$/;
    let getUser = localStorage.getItem("user");
    let user = JSON.parse(base64.decode(getUser));

    if (name.trim().length <= 0) {
      this.nameInput.focus();
      Toast({
        type: "info",
        message: "Enter your name.",
      });
    } else if (
      email.trim().length <= 0 ||
      emailValidator.test(email) !== true
    ) {
      this.emailInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid email address.",
      });
    } else if (num.test(contact) !== true || contact.trim().length !== 10) {
      this.contactInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid contact number.",
      });
    } else if (address.trim().length <= 0) {
      this.addressInput.focus();
      Toast({
        type: "info",
        message: "Enter your address.",
      });
    } else {
      if (user.hasOwnProperty(user.id) === true) {
        axios
          .post(`${API}api/order/`, {
            productId: productDetails.id,
            name: name,
            email: email,
            phone: contact,
            message: bookingMsg,
            address: address,
            landmark: landMark,
            orderDate: date + " " + time,
            userid: user.id,
            fabric: isFabric, //I have fabric==1
          })
          .then((res) => {
            console.log("order res", res);
            if (res.data.code === 200) {
              Toast({
                type: "success",
                message: "book order success.",
              });
            } else {
              Toast({
                type: "warning",
                message: "book failed",
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
      } else {
        this.setState({ isLoginModal: true });
      }
    }
  };

  onHandelChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  closeLoginModal = () => {
    this.setState({
      isLoginModal: false,
    });
  };

  render() {
    const {
      loader,
      productDetails,
      cateType,
      subCateType,
      isLoginModal,
      date,
      time,
      name,
      email,
      contact,
      landMark,
      address,
      bookingMsg,
    } = this.state;
    return (
      <main>
        <Modal
          isOpen={isLoginModal}
          // onAfterOpen={afterOpenModal}
          //onRequestClose={closeModal}
          style={customStyles}
        >
          <div>
            <h2>Log in</h2>

            <div className="msg">
              If you have an account, sign in with your email address.
            </div>
            <LoginComponent closeLoginModal={this.closeLoginModal} />
          </div>
        </Modal>

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
                      <form>
                        <ul>
                          <li className="date">
                            <input
                              type="date"
                              id=""
                              name="date"
                              value={date}
                              onChange={(evt) => this.onHandelChange(evt)}
                            />
                          </li>
                          <li className="time">
                            <input
                              type="time"
                              id=""
                              name="time"
                              value={time}
                              onChange={(evt) => this.onHandelChange(evt)}
                            />
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
                                  ref={(input) => {
                                    this.nameInput = input;
                                  }}
                                  type="text"
                                  id=""
                                  name="name"
                                  placeholder="Name"
                                  value={name}
                                  onChange={(evt) => this.onHandelChange(evt)}
                                />
                              </li>
                              <li>
                                <input
                                  ref={(input) => {
                                    this.emailInput = input;
                                  }}
                                  type="email"
                                  id=""
                                  name="email"
                                  placeholder="Email"
                                  value={email}
                                  onChange={(evt) => this.onHandelChange(evt)}
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="booking-lable">
                            <ul>
                              <li>
                                <input
                                  ref={(input) => {
                                    this.contactInput = input;
                                  }}
                                  type="tel"
                                  id=""
                                  name="contact"
                                  placeholder="Contact"
                                  minLength="10"
                                  maxLength="10"
                                  value={contact}
                                  onChange={(evt) => this.onHandelChange(evt)}
                                />
                              </li>
                              <li>
                                <input
                                  ref={(input) => {
                                    this.landMrkInput = input;
                                  }}
                                  type="text"
                                  id=""
                                  name="landMark"
                                  placeholder="Land Mark"
                                  value={landMark}
                                  onChange={(evt) => this.onHandelChange(evt)}
                                />
                              </li>
                            </ul>
                          </div>
                          <div className="booking-lable address">
                            <textarea
                              ref={(input) => {
                                this.addressInput = input;
                              }}
                              id=""
                              name="address"
                              placeholder="Address"
                              value={address}
                              onChange={(evt) => this.onHandelChange(evt)}
                            ></textarea>
                          </div>
                          <div className="booking-lable book-msg">
                            <textarea
                              id=""
                              name="bookingMsg"
                              placeholder="Booking Message"
                              value={bookingMsg}
                              onChange={(evt) => this.onHandelChange(evt)}
                            ></textarea>
                          </div>
                          <div className="booking-lable submit">
                            <input
                              type="submit"
                              value="BOOK NOW"
                              onClick={(evt) => this.onClickBookNow(evt)}
                            />
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
