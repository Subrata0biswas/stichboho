import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
	let url="";
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
						<li className="active"><a href={url}>Home</a></li>
						<li><a href={url}>About US</a></li>
						<li><a href={url}>How it Works</a></li>
						<li><a href={url}>How To Pay</a></li>
						<li><a href={url}>Services</a></li>
						<li><a href={url}>Blog</a></li>
						<li><a href={url}>Contact Us </a></li>
						<li><a href={url}>Career</a></li>
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
