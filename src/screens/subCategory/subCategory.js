import React from "react";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";

class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("sub params", this.props);
    this.goToPageTop();
    this.getSubCategoryByCategory();
  }

  goToPageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  getSubCategoryByCategory = () => {
    let params = {
      categoryId: 2,
      //categoryName: this.props.match.params.type,
    };
    console.log("dasta", params);
    Service("POST", "api/subcategory/", params).then((res) => {
      console.log("sub res", res);
      if (res.data.code === 200) {
        this.setState({
          categories: res.data.Category,
        });
      } else {
        Toast({
          type: res.data.status || "error",
          message: res.message || res.data.message,
        });
      }
    });
  };

  render() {
    return (
      <main>
        <div className="main-border">
          <div className="breadcumb">
            <div className="container">
              <ul>
                <li>
                  <span
                    className="span-cursor"
                    onClick={() => this.props.history.goBack()}
                  >
                    Home
                  </span>
                </li>
                <li>{this.props.match.params.type}</li>
              </ul>
            </div>
          </div>
          <div className="list-catagory-item-outer">
            <div className="container">
              <div className="catagory-name">Men - Trouser</div>
              <div className="list-item">
                <span className="list-items">List Items</span>
                <span className="items">1 - 12</span>
                <span className="total-items"> of 13</span>
              </div>
              <div className="select-style">Select Style</div>
            </div>
          </div>
          <div className="list-product-outer">
            <div className="container">
              <ul className="pro-grid">
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
                  </div>
                </li>
                <li>
                  <div className="pro-img">
                    <img src="../../assets/images/list-pro.jpg" alt="" />
                  </div>
                  <div className="pro-name-outer">
                    <div className="name">Casual</div>
                    <div className="price">₹ 600</div>
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
      </main>
    );
  }
}

export default SubCategory;
