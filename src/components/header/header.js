import React from 'react';
// import connect from 'react-redux'
import {
	
	Link,
	
  } from "react-router-dom";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
			selectedTab:"home"
		}
    }

	onClickRedirect = (type) =>{
console.log('pops', this.props)
 this.props.props.history.push(type)

	}

 render(){
	 const {selectedTab} = this.state;
    return(
        <header>
		<div className="container">
			<div className="row">
				 <div className="logo">
                     <a  href="#">
                         <img className="desk-top-logo" src="/assets/images/logo.png" alt="logo"/>
                     </a>
                     </div>
				 <div className="nav">
					<div className="mob-nav" onClick={()=>this.props.onOpenMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={this.props.isMenu? 'nav-active': 'nav-ul'}>
						<li className={selectedTab==='home'?"active":null}>
						<Link to="/">Home</Link>
						</li>
						<li><div onClick={()=>this.onClickRedirect('/about-us')}>About US</div></li>
						<li><a  href="#">How it Works</a></li>
						<li><a  href="#">How To Pay</a></li>
						<li><a  href="#">Services</a></li>
						<li><a  href="#">Blog</a></li>
						<li><a  href="#">Contact Us </a></li>
						<li><a  href="#">Career</a></li>
					</ul>
				 </div>
				 
			</div>
		</div>
	</header>
    )
 }
}

export default Header;
