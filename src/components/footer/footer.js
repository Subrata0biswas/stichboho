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
						<li className="active">
							<span className='span-cursor' >Home</span></li>
						<li><span className='span-cursor' >About US</span></li>
						<li><span className='span-cursor' >How it Works</span></li>
						<li><span className='span-cursor' >How To Pay</span></li>
						<li><span className='span-cursor' >Services</span></li>
						<li><span className='span-cursor' >Blog</span></li>
						<li><span className='span-cursor' >Contact Us </span></li>
						<li><span className='span-cursor' >Career</span></li>
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
