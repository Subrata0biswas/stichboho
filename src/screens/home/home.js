import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import connect from 'react-redux'

// import component
import { Service, API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    Service("GET", "api/homepage/", "").then((res) => {
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
  }

  redirectToProductList = (type, id) => {
    this.props.history.push(`/sub-category-list/id/${id}`, {
      type: type,
    });
  };

  render() {
    const { categories } = this.state;
    return (
      <main>
        <div className="main-border">
          <div className="main-banner">
            <Carousel
              showArrows={false}
              autoPlay={true}
              showStatus={false}
              showThumbs={false}
            >
              <img src="assets/images/main-ban.jpg" alt="" />
              <img src="assets/images/main-ban.jpg" alt="" />
              <img src="assets/images/main-ban.jpg" alt="" />
            </Carousel>
          </div>

          <div className="container">
            <div className="row">
              {/* category section start */}
              {categories.length > 0 ? (
                <div className="main-catagory-outer">
                  {categories.map((category, index) => {
                    return (
                      <div className="main-cata" key={index}>
                        <span
                          className="span-cursor"
                          onClick={() =>
                            this.redirectToProductList(
                              category.name.charAt(0).toUpperCase() +
                              category.name.slice(1),
                              category.id
                            )
                          }
                        >
                          <div className="img">
                            <img src={API + category.categoryImage} alt="" />
                          </div>
                          <div className="name">
                            {category.name.charAt(0).toUpperCase() +
                              category.name.slice(1)}
                          </div>
                        </span>
                      </div>
                    );
                  })}
                </div>
              ) : null}
              {/* category section end */}

              {/* way work section start */}
              <div className="we-work-outer">
                <div className="title">
                  <span>THE WAY WE WORK</span>
                </div>
                <div className="we-work-inr">
                  <div className="book-apnt">
                    <span>BOOK APPOINTMENT</span>
                  </div>
                  <div className="represent">
                    <span>Executive Visits you</span>
                  </div>
                  <div className="fabaric">
                    <span>Choose Fabric</span>
                  </div>
                  <div className="pick">
                    <span>Measurement</span>
                  </div>
                  <div className="trail-icon">
                    <span>Trial</span>
                  </div>
                  <div className="payment">
                    <span>Payments </span>
                  </div>
                  <div className="trail">
                    <span>Delivery</span>
                  </div>
                </div>
              </div>

              {/* way work section end */}

              {/* <div className="home-blog-outer">
                <div className="home-blog">
                  <div className="blog-img">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </div>
                  <div className="cont-outer">
                    <h2 className="title">Custom Title</h2>
                    <div className="cnt">
                      Lorem Ipsum is simply dummy text of the printing
                      andtypesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </div>
                    <div className="btn-outer">
                      <span className="span-cursor">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="home-blog">
                  <div className="blog-img">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </div>
                  <div className="cont-outer">
                    <h2 className="title">Custom Title</h2>
                    <div className="cnt">
                      Lorem Ipsum is simply dummy text of the printing
                      andtypesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </div>
                    <div className="btn-outer">
                      <span className="span-cursor">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="home-blog">
                  <div className="blog-img">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </div>
                  <div className="cont-outer">
                    <h2 className="title">Custom Title</h2>
                    <div className="cnt">
                      Lorem Ipsum is simply dummy text of the printing
                      andtypesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </div>
                    <div className="btn-outer">
                      <span className="span-cursor">Read More</span>
                    </div>
                  </div>
                </div>
                <div className="home-blog">
                  <div className="blog-img">
                    <img src="assets/images/blog-img.jpg" alt="" />
                  </div>
                  <div className="cont-outer">
                    <h2 className="title">Custom Title</h2>
                    <div className="cnt">
                      Lorem Ipsum is simply dummy text of the printing
                      andtypesetting industry. Lorem Ipsum has been the
                      industry's standard
                    </div>
                    <div className="btn-outer">
                      <span className="span-cursor">Read More</span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="reviews-outer">
            <div className="review-title">
              <h2 className="title-inr">
                <span className="span-cursor">Reviews</span>
              </h2>
            </div>

            <div className="review-cont-slider">
              <div className="container">
                <div className="review-con-outer">
                  <div className="img-outer">
                    <div className="img">
                      <img src="assets/images/review-images.png" alt="" />
                    </div>
                    <div className="name">Name</div>
                  </div>
                  <div className="cont">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </div>
                </div>
              </div>
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

export default Home;
