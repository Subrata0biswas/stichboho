import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <footer>
		<div className="container">
			<div className="footer-inr">
				<div className="footer-con">
					<h2 className="title">About Us</h2>
					<p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard </p>
				</div>
				<div className="footer-con footer-link">
					<h2 className="title">Main Links</h2>
					<ul>
						<li className="active"><a  href="#">Home</a></li>
						<li><a  href="#">About US</a></li>
						<li><a  href="#">How it Works</a></li>
						<li><a  href="#">How To Pay</a></li>
						<li><a  href="#">Services</a></li>
						<li><a  href="#">Blog</a></li>
						<li><a  href="#">Contact Us </a></li>
						<li><a  href="#">Career</a></li>
					</ul>
				</div>
				<div className="footer-con">
					<h2 className="title">About Us</h2>
					<p>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the  industry's standard </p>
				</div>
			</div>
		</div>
		<div className="copyright"><span className="copyright-con">&copy; Copyright 2021 by ..........</span><span className="recived">All rights reserved</span></div>
	</footer>
    )
 }
}

export default Footer;
