import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component{
	state = {
		'fieldIsPassword':true,
		'successMessage':'',
		'message':false,
		
		'username':'',
		'password':'',
	}
	
	handleLogin=()=>{
		this.setState({'message':true});
		const data = {'username':this.state.username, 'password':this.state.password}
		axios.post('http://127.0.0.1:8000/login/', data)
		.then((res)=>{
			this.setState(res.data);
			if(this.state.successMessage==='User logined successfully.')
				localStorage.removeItem('user');
				localStorage.setItem('user', res.data.user);		
				this.props.chechUserAuth(res.data.user);
		}).catch((err)=>{
			console.log(err);
		});
	}
	render(){
		return(
			<div>
				<form className='form-group'>
					
					<h6 className='message'>{this.state.message?this.state.message:''}</h6>
					
					<label>Username :</label>
					<h6 className='message'>{this.state.message?this.state.username:''}</h6>
					<input type='text' 
					className='form-control' 
					placeholder='e.g. sumit@123'
					onChange={e=>{this.setState({'username':e.target.value,'message':false})}}
					/><br/>
					
					<label>Password :</label>
					<h6 className='message'>{this.state.message?this.state.password:''}</h6>
					<input type={this.state.fieldIsPassword?'password':'text'} 
					className='form-control' 
					placeholder='e.g. password@123'
					onChange={e=>{this.setState({'password':e.target.value,'message':false})}}
					/><br/>
					<h1 
					onClick = {()=>{
					this.setState({'fieldIsPassword':!(this.state.fieldIsPassword)})}
					}
					className='btn btn-danger btn-sm'
					>{this.state.fieldIsPassword?'SHOW':'HIDE'}</h1><br/><br/>

					<h6 className='message'>{this.state.successMessage}</h6>
					
					<h1 type='submit' 
					className='btn btn-success m-2 form-control' 
					onClick={this.handleLogin}
					>LOGIN</h1>
				</form>
			</div>
		);
	}
}

export default Login;
