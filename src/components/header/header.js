import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

	onClickRedirect = (type) =>{
		this.props.props.history.push(type)	
	}
	
 render(){
    return(
        <header>
		<div className="container">
			<div className="row">
				 <div className="logo">
                     <span className='span-cursor' >
                         <img className="desk-top-logo" src="/assets/images/logo.png" alt="logo"/>
                     </span>
                 </div>
				 <div className="nav">

				 <div className="mob-nav" onClick={()=>this.props.onOpenMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					
					<ul className={this.props.isMenu? 'nav-active': 'nav-ul'}>
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
							<span className='span-cursor' onClick={()=>this.onClickRedirect('/service')}>Services</span></li>

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
				 
			</div>
		</div>
	</header>
    )
 }
}

export default Header;
