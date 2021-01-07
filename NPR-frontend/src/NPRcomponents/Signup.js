import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component{
	state = {
		'passwordFieldIsPassword':true,
		'password2FieldIsPassword':true,
		'successMessage':'',
		'message':false,


		'username':'',
		'email':'',
		'first_name':'',
		'last_name':'',
		'password':'',
		'password2':'',
		'loginStart':false,
	}


	handleLogin=()=>{
		if(this.state.loginStart){ 
			const data = {'username':this.state.username, 'password':this.state.password}
			axios.post('http://127.0.0.1:8000/login/', data)
			.then((res)=>{
				this.setState(res.data);
				if(this.state.successMessage==='User logined successfully.'){
					localStorage.setItem('user', res.data.user);		
					this.props.chechUserAuth(res.data.user);
				}
				else this.setState({'message':true});
			}).catch((err)=>{
				console.log(err);
			});
		}
	}

	handleSignup=()=>{
		const signupData = {
			'username':this.state.username,
			'email':this.state.email,
			'first_name':this.state.first_name,
			'last_name':this.state.last_name,
			'password':this.state.password,
			'password2':this.state.password2,
		}
		
		axios.post('http://127.0.0.1:8000/signup/', signupData).then(res=>{
			this.setState({'message':true});
			this.setState(res.data);
			
			if(this.state.successMessage==='User created successfully.'){
				
				this.setState({'message':false});
			}
		}).catch(err=>{
			console.error(err);
		});

		this.setState({'loginStart':true});
	}
	
	render(){
		return(
			<div>
				<form className='form-group'>
					
					<label>Username :</label>
					<h6 className='message'>{this.state.message?this.state.username:''}</h6>
					<input type='text' 
					className='form-control' 
					placeholder='e.g. sumit123'
					onChange={e=>{this.setState({'username':e.target.value,'message':false})}}
					/><br/>
					
					<label>First Name :</label>
					<input type='text' 
					className='form-control' 
					placeholder='e.g. Sumit'
					onChange={e=>{this.setState({'first_name':e.target.value})}}
					/><br/>
					
					<label>Last Name :</label>
					<input type='text' 
					className='form-control' 
					placeholder='e.g. Dhakad'
					onChange={e=>{this.setState({'last_name':e.target.value})}}
					/><br/>
					
					<label>Email :</label>
					<h6 className='message'>{this.state.message?this.state.email:''}</h6>
					<input type='email' 
					className='form-control' 
					placeholder='e.g. sumitdhakad123@gmail.com'
					onChange={e=>{this.setState({'emial':e.target.value,'message':false})}}
					/><br/>
					
					<label>Password :</label>
					<h6 className='message'>{this.state.message?this.state.password:''}</h6>
					<input type={this.state.passwordFieldIsPassword?'password':'text'} 
					className='form-control' 
					placeholder='Make strong password.'
					onChange={e=>{this.setState({'password':e.target.value,'message':false})}}
					/><br/>
					<h1 
					onClick = {()=>{this.setState({
						'passwordFieldIsPassword':!(this.state.passwordFieldIsPassword)
					})}}
					className='btn btn-danger btn-sm'
					>{this.state.passwordFieldIsPassword?'SHOW':'HIDE'}</h1><br/><br/>
					
					<label>Confirm password :</label>
					
					<h6 className='message'>{this.state.message?this.state.password2:''}</h6>
					<input type={this.state.password2FieldIsPassword?'password':'text'} 
					className='form-control' 
					placeholder='Both password should be same.'
					onChange={e=>{this.setState({'password2':e.target.value,'message':false})}}
					/><br/>
					<h1 
					onClick = {()=>{this.setState({
						'password2FieldIsPassword':!(this.state.password2FieldIsPassword)
					})}}
					className='btn btn-danger btn-sm'
					>{this.state.password2FieldIsPassword?'SHOW':'HIDE'}</h1><br/><br/>

					<h6 className='message'>{this.state.successMessage}</h6>
					<h6 className='message'>{this.state.message?this.state.message:''}</h6>
					<h1 type='submit' 
					className='btn btn-success m-2 form-control'
					onClick = {this.state.loginStart?this.handleLogin:this.handleSignup}
					>{this.state.loginStart?'NOW LOGIN':'SIGNUP'}</h1>
				</form>
			</div>
		);
	}
}

export default Signup;
