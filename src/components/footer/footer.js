import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <footer>
		<div class="container">
			<div class="footer-inr">
				<div class="footer-con">
					<h2 class="title">About Us</h2>
					<p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard </p>
				</div>
				<div class="footer-con footer-link">
					<h2 class="title">Main Links</h2>
					<ul>
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
				<div class="footer-con">
					<h2 class="title">About Us</h2>
					<p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard </p>
				</div>
			</div>
		</div>
		<div class="copyright"><span class="copyright-con">&copy; Copyright 2021 by ..........</span><span class="recived">All rights reserved</span></div>
	</footer>
    )
 }
}

export default Footer;
