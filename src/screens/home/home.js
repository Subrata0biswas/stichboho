import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import connect from 'react-redux'

// import component
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <>
        <Header />

    {/* start body */}
        <main>
            <div className="main-banner">
            <Carousel showArrows={false} autoPlay={true} showStatus={false} showThumbs={false}>
                <img src="assets/images/main-ban.jpg" alt=""/>
                <img src="assets/images/main-ban.jpg" alt=""/>
                <img src="assets/images/main-ban.jpg" alt=""/>
            </Carousel>
            </div>
            <div className="container">
                <div className="row">
                    <div className="main-catagory-outer">
                        <div className="main-cata">
                            <a href="#">
                                <div className="img"><img src="assets/images/main-cata-1.jpg" alt=""/>
                                </div>
                                <div className="name">Men</div>
                            </a>
                        </div>
                        <div className="main-cata">
                            <a href="#">
                                <div className="img"><img src="assets/images/main-cata-2.jpg" alt=""/></div>
                                <div className="name">Women</div>
                            </a>
                        </div>
                        <div className="main-cata">
                            <a href="#">
                                <div className="img"><img src="assets/images/main-cata-3.jpg" alt=""/></div>
                                <div className="name">Kids</div>
                            </a>
                        </div>
                        <div className="main-cata">
                            <a href="#">
                                <div className="img"><img src="assets/images/main-cata-4.jpg" alt=""/></div>
                                <div className="name">Home Decor</div>
                            </a>
                        </div>
                    </div>
                    <div className="home-blog-outer">
                        <div className="home-blog">
                            <div className="blog-img"><img src="assets/images/blog-img.jpg" alt=""/></div>
                            <div className="cont-outer">
                                <h2 className="title">Custom Title</h2>
                                <div className="cnt">
                                    Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard 
                                </div>
                                <div className="btn-outer"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="home-blog">
                            <div className="blog-img"><img src="assets/images/blog-img.jpg" alt=""/></div>
                            <div className="cont-outer">
                                <h2 className="title">Custom Title</h2>
                                <div className="cnt">
                                    Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard 
                                </div>
                                <div className="btn-outer"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="home-blog">
                            <div className="blog-img"><img src="assets/images/blog-img.jpg" alt=""/></div>
                            <div className="cont-outer">
                                <h2 className="title">Custom Title</h2>
                                <div className="cnt">
                                    Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard 
                                </div>
                                <div className="btn-outer"><a href="#">Read More</a></div>
                            </div>
                        </div>
                        <div className="home-blog">
                            <div className="blog-img"
                            ><img src="assets/images/blog-img.jpg" alt=""/></div>
                            <div className="cont-outer">
                                <h2 className="title">Custom Title</h2>
                                <div className="cnt">
                                    Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard 
                                </div>
                                <div className="btn-outer"><a href="#">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="reviews-outer">
                <div className="review-title">
                    <h2 className="title-inr">
                        <span>Reviews</span>
                    </h2>
                </div>
                <div className="review-cont-slider">
                    <div className="container">
                        <div className="img"><img src="assets/images/review-images.png" alt=""/></div>
                        <div className="name">Name</div>
                        <div className="cont">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </div>
                </div>
            </div>
        </main>
        {/* end body */}

        <Footer />
   </>
    )
 }
}

export default Home;
