import React from 'react';
// import connect from 'react-redux'

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
			isMenu:false
		}
    }

	onOpenMenu = () =>{
		this.setState({
			isMenu:!this.state.isMenu
		})
	}

 render(){
	 const {isMenu} = this.state;
    return(
        <header>
		<div className="container">
			<div className="row">
				 <div className="logo">
                     <a href="#">
                         <img className="desk-top-logo" src="/assets/images/logo.png" alt="logo"/>
                     </a>
                     </div>
				 <div className="nav">
					<div className="mob-nav" onClick={()=>this.onOpenMenu()}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={isMenu? "nav-ul":null}>
						<li className="active"><a href="#">Home</a></li>
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
