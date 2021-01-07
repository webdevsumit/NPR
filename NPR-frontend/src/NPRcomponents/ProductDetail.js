import React, { Component} from 'react';
import AllComments from './AllComments';
import axios from 'axios';

class ProductDetail extends Component{
	state = {
		'writenComment':''
	}

	fetchData=()=>{
		const url = 'http://127.0.0.1:8000/product/'+this.props.ProductId+'/';
		axios.get(url).then(res=>{
			this.setState(res.data);
		}).catch((err)=>{console.error(err)});
	}

	componentDidMount(){
		this.fetchData();
	}

	handleLike(ProductId,no){
		
		const url = 'http://127.0.0.1:8000/updateLike';
		const data = {'ProductId':ProductId,'Username':localStorage.getItem('user'),'Like':no}
		axios.post(url,data).then(res=>{
			this.setState(res.data);
		}).catch((err)=>{console.error(err)});
	}

	handleComment(com){
		if(!(com.length===0)){
			const url = 'http://127.0.0.1:8000/createComment';
			const data = {'ProductId':this.props.ProductId,'Username':localStorage.getItem('user'),'Comment':com}
			axios.post(url,data).then(res=>{
				const AllComments = this.state.AllComments;
				AllComments[AllComments.length]=res.data;
				this.setState({'AllComments':AllComments,'writenComment':''});
				
			}).catch((err)=>{console.error(err)});
		} 
	}
	
	render(){
		if(!this.state.AllComments){
			return null;
		}
		return(
			
			<div className = 'container'>
			
				<div className='jumbotron navBar'
				style={{padding:'5px 0px'}}
				><h3 className='text-center'>NPR</h3>
				</div>
				
				<hr className='TopHr'/>
				
				<h6 className='btn btn-danger btn-sm' 
				onClick={this.props.handleBack}>Back</h6>
				
				
				<div className="container">
					<img src={this.state.Image} 
					className='productDetailImg'
					alt='Product img'/>
					<h1 className='productDetailTittle'>{this.state.product_name}</h1>
					<hr/>
					<div className='container sortDetail'>
						<h6 className='btn btn-success btn-sm m-3'
						onClick={()=>{this.handleLike(this.props.ProductId,'1')}}
						>{this.state.no_of_likes} likes</h6>
						
						<h6 className='btn btn-danger btn-sm m-3'
						onClick={()=>{this.handleLike(this.props.ProductId,'0')}}
						>{this.state.no_of_dislikes} dislikes</h6>

						<h6 className='btn btn-warning btn-sm m-3'
						onClick={()=>{this.handleLike(this.props.ProductId,'-1')}}
						>remove both</h6>
						
						<h6>Comments : {this.state.no_of_comments}</h6>
						<h6>Launch Date : {this.state.launched_on}</h6>
					</div>
					<div className='container comments'>
						<h3 className='productDetailTittle'>COMMENTS</h3>
						<AllComments data={this.state.AllComments}/>


						<hr/>
						<textarea  className='form-control container' rows='6'
						value = {this.state.writenComment}
						onChange={(e)=>{
							this.setState({'writenComment':e.target.value});
						}}
						></textarea>
						
						<div className='m-3'></div>
						<h5 className='btn btn-primary btn-sm'
						onClick={()=>{this.handleComment(this.state.writenComment)}}
						>Comment</h5>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDetail;
