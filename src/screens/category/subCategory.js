import React from "react";
import axios from "axios";

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";

class SubCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subCategories: [],
      cateType: "",
    };
  }

  componentDidMount() {
    console.log("sub params", this.props);
    this.getSubCategoryByCategory();
  }

  getSubCategoryByCategory = () => {
    axios
      .post("http://208.109.15.202:3000/api/subcategory/", {
        categoryId: this.props.match.params.id,
        // categoryName: this.props.match.params.type,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.code === 200) {
          this.setState({
            subCategories: res.data.subCategory,
            cateType: res.data.categoryType,
          });
        } else {
          this.callToastMessage();
        }
      })
      .catch((err) => {
        this.callToastMessage();
      });
  };

  callToastMessage = () => {
    window.alert("There is something wrong");
  };

  redirectToNextPage = (type, id) => {
    this.props.history.push(`/sub-category-list/${type}/${id}`, {
      type: type,
    });
  };

  render() {
    const { subCategories, cateType } = this.state;
    return (
      <main>
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
                <li>{cateType}</li>
              </ul>
            </div>
          </div>
          {/* <div className="list-catagory-item-outer">
            <div className="container">
              <div className="catagory-name">Men - Trouser</div>
              <div className="list-item">
                <span className="list-items">List Items</span>
                <span className="items">1 - 12</span>
                <span className="total-items"> of 13</span>
              </div>
              <div className="select-style">Select Style</div>
            </div>
          </div> */}

          {/* start sub category section */}
          {subCategories.length > 0 ? (
            <div className="list-product-outer">
              <div className="container">
                <ul className="pro-grid">
                  {subCategories.map((subCate) => {
                    return (
                      <li
                        key={subCate.id}
                        onClick={() =>
                          this.props.history.push(
                            `/product-list/id/${subCate.id}`
                          )
                        }
                      >
                        <div className="pro-img">
                          <img src={API + subCate.categoryImage} alt="" />
                        </div>
                        <div className="pro-name-outer">
                          <div className="name">{subCate.name}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}
          {/* end sub category section */}

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
