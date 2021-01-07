import React, { Component } from 'react';
import Product from './Product';
import axios from 'axios';

class AllProducts extends Component{
	state = {
		'data':[],
		'filteredData':[],
		'searchData':''
	}
	
	componentDidMount(){
		axios.get('http://127.0.0.1:8000/productList/?format=json').then(res=>{
			this.setState({'data':res.data,'filteredData':res.data});
		}).catch(err=>{ 
			console.error(err);
		});
	}

	render(){
		return(
			<div className='cotainer'>
				<div className='jumbotron form-inline navBar' 
					style={{padding:'5px 4px'}}
					>
					<h3 className='m-2'>NPR</h3>
									
					<div className='cotainer'>
						<input type='search'
						
						onChange={e=>{
							this.setState({'filteredData':this.state.data
							.filter(d=>d.product_name.includes(e.target.value
							.toUpperCase()))});
						}}
						className='form-control p-1 cm-10 m-2' 
						placeholder='Search product'
						/>
					</div>
					<span className='btnForHover'></span>
					<div className='form-inline logoutBtn'>
						<h5 className=''>{localStorage.getItem('user')}</h5>
						<h3 className='btn btn-danger btn-sm'
						onClick={this.props.handleLogout}
						>logout</h3>
					</div>
				</div>
				<hr className='TopHr'/>
				<div>
					{this.state.filteredData.map((d)=>{return(
						<div className='container' key={d.id}>	
							<Product
							ProductName={d.product_name}
							Image={d.Image}
							Likes={d.no_of_likes}
							Comments={d.no_of_comments}
							Dislikes={d.no_of_dislikes}
							LaunchDate={d.launched_on}
							onClick={()=>this.props.onClick(d.id)}
							/>
						</div>
					)})}
				</div>
			</div>
		);
	}
}

export default AllProducts;
