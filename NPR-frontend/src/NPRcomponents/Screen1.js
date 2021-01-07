import React, { Component } from 'react';
import Login from './Login';
import Signup from './Signup';
// import axios from 'axios';

class Screen1 extends Component{
	state = {
		'loginPage':true,
	};
	
	render(){
		const {chechUserAuth} = this.props;
		return(
			<div className='container'>
				<div className='jumbotron'
				style={{padding:'5px 0px'}}
				><h3 className='text-center'>NPR</h3>
				</div>
				
				<button className='btn btn-default m-2 btn-sm' 
				onClick={()=>{this.setState({'loginPage':!(this.state.loginPage)})}}
				>{this.state.loginPage?'SIGNUP':'LOGIN'}</button>
				
				<hr/>
				{this.state.loginPage?<Login 
					chechUserAuth={chechUserAuth}
				/>:<Signup
					chechUserAuth={chechUserAuth}
				/>}
				
			</div>
		);
	};
};

export default Screen1;
