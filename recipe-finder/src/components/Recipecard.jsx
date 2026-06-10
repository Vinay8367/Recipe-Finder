import React from 'react' ; 
import "./styles/Recipecard.css" ;

const Recipecard = ({ recipe, setSelectedRecipe }) => {

    return (

        <div
            className='recipe-card'
            onClick={() => setSelectedRecipe(recipe)}
        >
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h3>{recipe.strMeal}</h3>
        <p> {recipe.strCategory} </p>
    </div>
  )
}

export default Recipecard; 