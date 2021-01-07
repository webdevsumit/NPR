import React,{ Component } from 'react';
import axios from 'axios';


class AllComments extends Component{
	state={
		'Username':localStorage.getItem('user'),
		'data' : this.props.data,
	}
	handleDeleteComment(id){
		const url = 'http://127.0.0.1:8000/destroyComment/'+id;
		const data = this.state.data.filter(d=>d.id!==id);
		axios.delete(url);
		this.setState({'data':data});
	}
	render(){
		return(
			<div className='container'>
				{this.state.data.map((comment)=>{
					return(
					<div key={comment.id} className='comment'>
						<h5>{comment.Username} :-</h5>
						<p>{comment.Comment}</p>
						{this.state.Username===comment.Username?<h6 
						className='btn btn-danger btn-sm'
						onClick={()=>{this.handleDeleteComment(comment.id)}}>Delete</h6>:null}
					</div>)
				})}
			</div>
		);
	}
}

export default AllComments;
