import React from "react";
import axios from "axios";

// import component
import { API } from "../../config/service";
import NoDataFound from "../../components/noDataFound/noDataFound";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: true,
      products: [],
      cateType: "",
      subCateType: "",
    };
  }

  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    this.getProductListBySubCategory();
  }

  getProductListBySubCategory = () => {
    axios
      .post("http://208.109.15.202:3000/api/productList/", {
        productId: this.props.match.params.id,
      })
      .then((res) => {
        this.setState({ loader: false });
        if (res.data.code === 200) {
          this.setState({
            products: res.data.productTypes,
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

            {products.length > 0 ? (
              <div className="list-product-outer">
                <div className="container">
                  <ul className="pro-grid">
                    {products.map((product) => {
                      return (
                        <li
                          key={product.id}
                          onClick={() =>
                            this.props.history.push(
                              `/product-details/id/${product.id}`,
                              {
                                details: product,
                              }
                            )
                          }
                        >
                          <div className="pro-img">
                            <img src={API + product.productImage} alt="" />
                          </div>
                          <div className="pro-name-outer">
                            <div className="name">{product.name}</div>
                            <div className="price">₹ {product.price}</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ) : (
              <NoDataFound />
            )}

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

export default ProductList;
