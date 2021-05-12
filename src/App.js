import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import base64 from "react-native-base64";

// import layout for comment component
import Layout from "./layout/layout";

// // import user component
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
import Registration from "./screens/registration/registration";

import PageNotFound from "./components/pageNotFound/pageNotFound";

// import executive component
import ExecutiveDashboard from "./executiveScreens/executiveDashboard/executiveDashboard";

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
          <GeneralRoute exact path="/registration" component={Registration} />
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

          {/* executive route start */}
          <ExecutiveRoute
            exact
            path="/executive/dashboard"
            component={ExecutiveDashboard}
          />

          {/* executive route end */}

          {/* page not found Start */}
          <Route component={PageNotFound} />
          {/* page not found end */}
        </Switch>
      </Router>
    );
  }
}
export default App;

const checkAuth = () => {
  const getUser = window.localStorage.getItem("user");
  if (getUser) {
    let user = JSON.parse(base64.decode(getUser));
    return {
      userType: user.type,
      isLogin: true,
    };
  } else {
    return {
      isLogin: false,
    };
  }
};

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

// check executive route
const ExecutiveRoute = ({ component: Component, ...rest }) => {
  const { userType, isLogin } = checkAuth();
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && userType === "executive" ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
};
