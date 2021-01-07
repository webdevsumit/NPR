import React, { Component } from 'react';
import AllProducts from './AllProducts';
import ProductDetail from './ProductDetail';
import axios from 'axios';

class Screen2 extends Component{
	state = {
		'detailedProductPage':false,
		'idToFetchDetail':0,
	}
	handleProductDetial=(id)=>{
		this.setState({'detailedProductPage':true,'idToFetchDetail':id});
	}

	handlingBackEvent=()=>{
		this.setState({'detailedProductPage':false});
	}

	handleLogout=()=>{
		const data = {'username': localStorage.getItem('user')};
		axios.post('http://127.0.0.1:8000/logout/', data)
		.then((res)=>{
			if(res.data.successMessage==='User logout successfully.'){
				localStorage.removeItem('user');
				this.props.chechUserAuth('');
			}
		}).catch((err)=>{
			console.log(err);
		});
	}
	render(){
		return(
			<div className='cotainer'>
				{this.state.detailedProductPage?<ProductDetail
				handleBack={this.handlingBackEvent}
				ProductId={this.state.idToFetchDetail}
				/>:<AllProducts 
				handleLogout = {this.handleLogout}
				onClick={this.handleProductDetial}/>}
			</div>
		);
	}
}

export default Screen2;
