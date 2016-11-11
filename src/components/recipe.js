import React, {Component} from 'react';

export default class Recipe extends Component {
	constructor(props){
		super(props);
		this.state = {
			viewMore:false
		}
	}
	
	render(){
		const {title,ingredients,instructions,time} = this.props.data;
		const ingredients_list = ingredients.map( (item, index) => {
			return(
				<div className="col-md-6" key={index}>
					<p className="card-category-list">{item}</p>
				</div>
			)
		});

		const instructions_list = instructions.map( (item, index) => {
			return(
				<div className="col-md-12" key={index}>
					<p className="card-category-list">{item}</p>
				</div>
			)
		});

		return(
			<div className="col-xs-12 col-md-8 col-md-offset-2 card-wrapper">
	  		<div className="card">
			    <div className="card-block">
		        <h2 className="card-title" onClick={ () => this.setState({viewMore:!this.state.viewMore})}><span className="text-left">{title}</span><span className="pull-right">{`${time} mins`}</span></h2>
		        <hr />
		        {this.state.viewMore ? 
		         	(<div className="more-info">
								<h3 className="card-category-title">Ingredients</h3>
								<div className="row">
									{ingredients_list}
								</div>
							  <hr />
								<h3 className="card-category-title">Instructions</h3>
								<div className="row">
									{instructions_list}
								</div>
								<hr />
							</div> ) : ""
						}
		        <a href="#" className="btn btn-primary action-btn" onClick={() => this.props.onEdit(this.props.data)}>Edit</a>
		        <a href="#" className="btn btn-primary action-btn" onClick={() => this.props.onDelete(this.props.data)}>Delete</a>
		        <a href="#" className="btn btn-primary action-btn pull-right" onClick={ () => this.setState({viewMore:!this.state.viewMore})}>{this.state.viewMore ? "Less" : "More" } </a>
			    </div>
				</div>
			</div>
		)
	}
};