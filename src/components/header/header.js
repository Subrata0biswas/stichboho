import React from 'react';
// import connect from 'react-redux'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
	let url="";
    return(
        <header>
		<div className="container">
			<div className="row">
				 <div className="logo">
                     <a href={url}>
                         <img className="desk-top-logo" src="/assets/images/logo.png" alt="logo"/>
                     </a>
                     </div>
				 <div className="nav">
					<div className="mob-nav" onClick={()=>this.props.onOpenMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={this.props.isMenu? null: "nav-ul"}>
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
				 
			</div>
		</div>
	</header>
    )
 }
}

export default Header;
