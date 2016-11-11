import React from 'react';
import Recipe from './recipe';
const RecipeList = (props) => {
	const recipe_list = props.allRecipes.map( (recipe) => <Recipe key={recipe.id} data={recipe} onDelete={props.onDelete} onEdit={props.onEdit} /> )
	return(
		<div className="recipeDisplayList">
    	<div className="row">
    		{recipe_list}
    	</div>
    </div>
	)
}
export default RecipeList;