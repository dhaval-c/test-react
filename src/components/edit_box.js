import React, { Component } from 'react';

export default class EditBox extends Component {
	constructor(props){
		super(props);
		this.state = {
			title:props.currentRecipe.title,
			ingredients:props.currentRecipe.ingredients,
			instructions:props.currentRecipe.instructions,
			time:props.currentRecipe.time,
			id:props.currentRecipe.id
		}

		this.onAdd = this.onAdd.bind(this);
		this.onDelete = this.onDelete.bind(this);
  	this.onSave = this.onSave.bind(this);
  	this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	onAdd(key){
		//document.querySelectorAll(`[name=${key}]`)[0].value gives value of the corresponding input element
		var inputValue = document.querySelectorAll(`[name=${key}]`)[0].value;
		if( key === "instructions" ){
			this.setState({instructions:[].concat(this.state.instructions,inputValue)}, function onUpdating(){
				document.querySelectorAll(`[name=${key}]`)[0].value = "";
			});
		}
		else{
			this.setState({ingredients:[].concat(this.state.ingredients,inputValue)}, function onUpdating(){
				document.querySelectorAll(`[name=${key}]`)[0].value = "";
			});
		}
	}
	onDelete(key,item,id){
		var temp = this.state[key].slice();
		temp.splice(id,1);
		this.setState({[key]:temp});
	}
	onSave(button){
		if(button === "save"){
			if(this.state.title.length === 0 || this.state.time.length === 0){
				alert("Please enter the name and the time required for the recipe.")
			}
			else{
				this.props.onSave({
					title:this.state.title,
					ingredients:this.state.ingredients,
					instructions:this.state.instructions,
					time:this.state.time,
					id:this.state.id
				});
			}
		}
		else{
			this.props.onSave();
		}
	}
	handleKeyPress(keyCode,stateVariable){
		if(keyCode == 13){
			this.onAdd(stateVariable);
		}			
	}
	render(){
		const {ingredients,instructions} = this.state;
		const ingredients_list = ingredients.map( (item,index) => <li key={index} onClick={() => this.onDelete("ingredients",item,index)}>{item}</li>);
		const instructions_list = instructions.map( (item,index) => <li key={index} onClick={() => this.onDelete("instructions",item,index)}>{item}</li>);
		return(
			<div className="editBox">
	    	<div className="container">
	    		<div className="row no-gutter">
	    			<div className="col-xs-12 col-md-8 col-md-offset-2">
				    	<div className="box-wrapper">
				    		<div className="col-xs-12">
	                <h1 className="page-name text-center"><span>{`${this.props.boxType} Recipe`}</span></h1>
	              </div>
				    		<form className="form-horizontal">
								  <div className="form-group">
								    <label className="col-xs-12 col-sm-2 control-label">Title</label>
								    <div className="col-xs-10 col-sm-8">
								      <input className="form-control" placeholder="Title" name='title' value={this.state.title} onChange={(e) => this.setState({title:e.target.value})} />
								    </div>
								  </div>
								  <div className="row hidden-xs">
								  	<div className="col-xs-0 col-sm-8 col-sm-offset-2">
								  		<ul className="list-unstyled list-inline ">
										  	{ingredients_list}
										  </ul>
								  	</div>
								  </div>
								  <div className="form-group">
								    <label className="col-xs-12 col-sm-2 control-label">Ingredients</label>
								    <div className="row hidden-sm">
									  	<div className="col-xs-10 col-sm-0 form-control-wrapper">
									  		<ul className="list-unstyled list-inline ">
											  	{ingredients_list}
											  </ul>
									  	</div>
									  </div>
								    <div className="col-xs-10 col-sm-8 form-control-wrapper">
								      <input className="form-control" placeholder="Ingredients" name='ingredients' onKeyPress={(e) => this.handleKeyPress(e.which,"ingredients")} />
								    </div>
								    <div className="col-xs-2 col-sm-2 action-btn-wrapper">
									    <a className="btn btn-primary action-btn" onClick={() => this.onAdd('ingredients')}>+</a>
								    </div>
								  </div>
								  <div className="row hidden-xs">
								  	<div className="col-xs-0 col-sm-8 col-sm-offset-2">
								  		<ul className="list-unstyled">
										  	{instructions_list}
										  </ul>
								  	</div>
								  </div>
							    <div className="form-group">
								    <label className="col-xs-12 col-sm-2 control-label">Instructions</label>
								    <div className="row hidden-sm">
									  	<div className="col-xs-10 col-sm-0 form-control-wrapper">
									  		<ul className="list-unstyled">
											  	{instructions_list}
											  </ul>
									  	</div>
									  </div>
								    <div className="col-xs-10 col-sm-8 form-control-wrapper">
								      <input className="form-control" placeholder="Instructions" name='instructions' onKeyPress={(e) => this.handleKeyPress(e.which,"instructions")} />
								    </div>
								    <div className="col-xs-2 col-sm-2 action-btn-wrapper">
								      <a className="btn btn-primary action-btn" onClick={() => this.onAdd('instructions')}>+</a>
								    </div>
								  </div>
								  <div className="form-group">
								    <label className="col-xs-12 col-sm-2 control-label">Time (mins)</label>
								    <div className="col-xs-10 col-sm-8">
								      <input className="form-control" placeholder="Time in minutes" name='Time' value={this.state.time} onChange={(e) => this.setState({time:e.target.value})} />
								    </div>
								  </div>
								  <div className="row">
								    <a className="btn btn-primary action-btn editBox-action-btn" onClick={() => this.onSave('save')}>Save</a>
						        <a className="btn btn-primary action-btn editBox-action-btn" onClick={() => this.onSave()}>Cancel</a>
								  </div> 
								</form>
				    	</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
		)
	}
}