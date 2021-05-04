import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import layout for comment component
import Layout from "./layout/layout";

// // import component
import Home from "./screens/home/home";
import SubCategory from "./screens/subCategory/subCategory";
import ProductList from "./screens/products/productList";
import ProductDetails from "./screens/products/productDetails";
import AboutUs from "./screens/aboutUs/aboutUs";
import ContactUs from "./screens/contactUs/contactUs";
import HowItWork from "./screens/howItWork/howItWork";
import HowToPlay from "./screens/howToPlay/howToPlay";
import Service from "./screens/service/service";
import Blog from "./screens/blog/blog";
import Career from "./screens/career/career";
import Login from "./screens/login/login";

import PageNotFound from "./components/pageNotFound/pageNotFound";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* header menu start */}
          <GeneralRoute exact path="/about-us" component={AboutUs} />
          <GeneralRoute exact path="/contact-us" component={ContactUs} />
          <GeneralRoute exact path="/how-it-work" component={HowItWork} />
          <GeneralRoute exact path="/how-to-play" component={HowToPlay} />
          <GeneralRoute exact path="/service" component={Service} />
          <GeneralRoute exact path="/blog" component={Blog} />
          <GeneralRoute exact path="/career" component={Career} />
          <GeneralRoute exact path="/login" component={Login} />
          {/* header menu end */}

          <GeneralRoute exact path="/" component={Home} />
          <GeneralRoute
            exact
            path="/sub-category-list/id/:id"
            component={SubCategory}
          />
          <GeneralRoute
            exact
            path="/product-list/id/:id"
            component={ProductList}
          />

          <GeneralRoute
            exact
            path="/product-details/id/:id"
            component={ProductDetails}
          />

          {/* page not found Start */}
          <Route component={PageNotFound} />
          {/* page not found end */}
        </Switch>
      </Router>
    );
  }
}
export default App;

// check general route
const GeneralRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};
