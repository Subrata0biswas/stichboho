import React from 'react';

class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

 render(){
    return(
        <main>
		<div className="main-border">
			<div className="breadcumb">
				<div className="container">
					<ul>
						<li><span className='span-cursor' onClick={()=>this.props.history.goBack()}>Home</span></li>
						<li>{this.props.match.params.type}</li>
					</ul>
				</div>
			</div>
			<div className="list-catagory-item-outer">
				<div className="container">
					<div className="catagory-name">Men - Trouser</div>
					<div className="list-item">
						<span className="list-items">List Items</span>
						<span className="items">1 - 12</span>
						<span className="total-items">of 13</span>
					</div>
					<div className="select-style">Select Style</div>
				</div>
			</div>
			<div className="list-product-outer">
				<div className="container">
					<ul className="pro-grid">
						<li>
							<div className="pro-img">
								<img src='../../assets/images/list-pro.jpg' alt=""/>
							</div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img">
								<img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
						<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						<li>
							<div className="pro-img"><img src='../../assets/images/list-pro.jpg' alt=""/></div>
							<div className="pro-name-outer">
								<div className="name">Casual</div>
								<div className="price">₹ 600</div>
							</div>
						</li>
						
					</ul>
				</div>
			</div>
			<span className="cut-item top-left"></span>
			<span className="cut-item left-bottom"></span>
			<span className="cut-item top-right"></span>
			<span className="cut-item right-bottom"></span>
			<span className="cut-item bottom"></span>
		</div>
			
	</main>
    )
 }
}

export default ProductList;
