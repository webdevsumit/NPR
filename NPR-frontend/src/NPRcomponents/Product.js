import React , { Component } from 'react';


class Product extends Component{
	state={
		
	}
	render(){
		return(
			<div className='container p-2 m-2 bg-warning product'
			 onClick={this.props.onClick}>
			 	<span>
			 		<img src={this.props.Image} alt='product img' className='productImg'/>
			 	</span>
			 	<span>
					<h4 className='m-2 link productHead' >{this.props.ProductName}</h4>
					<div className='sortProductDetail'>
						<h6 className='m-2'>Likes:{this.props.Likes}</h6>
						<h6 className='m-2'>Comments:{this.props.Comments}</h6>
						<h6 className='m-2'>Dislikes:{this.props.Dislikes}</h6>
						<h6 className='m-2'>Launched on:{this.props.LaunchDate}</h6>
					</div>
				</span>
			</div>
		);
	}
}

export default Product;
