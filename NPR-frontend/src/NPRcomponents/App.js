import React, { Component } from 'react';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import axios from 'axios';
import './App.css';

class App extends Component{
	state = {
		'auth':false,
	}
	
	chechUserAuth=(user)=>{
		axios.post('http://127.0.0.1:8000/',{'user':user}).then(res=>{
			console.log(res.data)
			
			if(!(res.data.username===0)){
				this.setState({'data':res.data,'auth':true});
			}
			else this.setState({'data':res.data,'auth':false});
		}).catch((err)=>{
			console.error(err);
		});
	}
	componentDidMount(){
		const user = localStorage.getItem('user') || '';
		this.chechUserAuth(user);
	}
	render(){
		return(
			<div className = 'container'>
				{!this.state.auth?<Screen1 chechUserAuth={this.chechUserAuth}/>:<Screen2
				chechUserAuth={this.chechUserAuth}/>}
			</div>
		);
	}
}

export default App;
