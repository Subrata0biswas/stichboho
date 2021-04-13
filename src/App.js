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

 import PageNotFound from './components/pageNotFound/pageNotFound'

class App extends React.Component{
  render(){
    return(
      <Router>
        <Switch>
          <GeneralRoute exact path="/" component={Home} />
          <GeneralRoute exact path="/product-list/:type/:id" component={ProductList} />
          <GeneralRoute exact path="/about-us" component={AboutUs} />
          <Route component={PageNotFound} />
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

