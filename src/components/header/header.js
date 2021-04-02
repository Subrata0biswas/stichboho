import React from 'react';
// import connect from 'react-redux'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <header>
		<div class="container">
			<div class="row">
				 <div class="logo">
                     <a href="#">
                         <img class="desk-top-logo" src="/assets/images/logo.png" alt="logo"/>
                     </a>
                     </div>
				 <div class="nav">
					<div class="mob-nav">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul class="nav-ul">
						<li class="active"><a href="#">Home</a></li>
						<li><a href="#">About US</a></li>
						<li><a href="#">How it Works</a></li>
						<li><a href="#">How To Pay</a></li>
						<li><a href="#">Services</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">Contact Us </a></li>
						<li><a href="#">Career</a></li>
					</ul>
				 </div>
				 
			</div>
		</div>
	</header>
    )
 }
}

export default Header;