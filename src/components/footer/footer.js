import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

	onClickRedirect = (type) =>{
		this.props.props.history.push(type)	
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
					<li className={this.props.props.location.pathname==='/'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/')}>
								Home
							</span>
						</li>
						
						<li className={this.props.props.location.pathname==='/about-us'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/about-us')}>
								About US
							</span>
						</li>
						<li className={this.props.props.location.pathname==='/how-it-work'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/how-it-work')}>
								How it Works
							</span>
						</li>
						
						<li className={this.props.props.location.pathname==='/how-to-play'?"active":null}>
							<span className='span-cursor'  onClick={()=>this.onClickRedirect('/how-to-play')}>
								How To Pay
							</span>
						</li>

						<li className={this.props.props.location.pathname==='/service'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/service')}>
								Services
							</span>
						</li>
						<li className={this.props.props.location.pathname==='/blog'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/blog')}>Blog</span></li>
						<li className={this.props.props.location.pathname==='/contact-us'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/contact-us')}>
								Contact Us
						</span>
						</li>
						<li className={this.props.props.location.pathname==='/career'?"active":null}>
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/career')}>Career</span>
						</li>
					</ul>
				</div>
				<div className="footer-con">
					<h2 className="title">Contact Us</h2>
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
