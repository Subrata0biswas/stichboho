import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import layout for comment component
import Layout from './layout/layout'

// // import component
 import Home from './screens/home/home'
 import ProductList from './screens/products/productList'
 import AboutUs from './screens/aboutUs/aboutUs'
 import ContactUs from './screens/contactUs/contactUs'
 import HowItWork from './screens/howItWork/howItWork'
 import HowToPlay from './screens/howToPlay/howToPlay'
 import Service from './screens/service/service'
 import Blog from './screens/blog/blog'
 import Career from './screens/career/career'
 
 import PageNotFound from './components/pageNotFound/pageNotFound'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <GeneralRoute exact path="/" component={Home} />
          <GeneralRoute exact path="/product-list/:type/:id" component={ProductList} />
          <GeneralRoute exact path="/about-us" component={AboutUs} />
          <GeneralRoute exact path="/contact-us" component={ContactUs} />
          <GeneralRoute exact path="/how-it-work" component={HowItWork} />
          <GeneralRoute exact path="/how-to-play" component={HowToPlay} />
          <GeneralRoute exact path="/service" component={Service} />
          <GeneralRoute exact path="/blog" component={Blog} />
          <GeneralRoute exact path="/career" component={Career} />

          {/* page not found Start */}
          <Route component={PageNotFound} />
          {/* page not found end */}
        </Switch>
      </Router>
    )
  }
}
export default App;


 
// check general route
const GeneralRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        <Layout>
         <Component {...props} />
        </Layout>
        }
    />
  )
}

