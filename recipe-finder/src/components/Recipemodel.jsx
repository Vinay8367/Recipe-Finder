import React from 'react';
import "./styles/RecipeModel.css";

const RecipeModel = ({ recipe, closeModel }) => {

    if (!recipe) return null;

    const ingredients = [];

    for (let i = 1; i <= 20; i++) {

        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];

        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    const instructions = recipe.strInstructions
        ?.split(".")
        .filter(step => step.trim() !== "");

    return (
        <div className="modal-overlay">

            <div className="modal-content">

                <button className="close-btn" onClick={closeModel}>
                    ✕
                </button>

                <h2>{recipe.strMeal}</h2>

                <div className="food-meta">

                    <p><strong>Category:</strong> {recipe.strCategory}</p>

                    <p><strong>Area:</strong> {recipe.strArea}</p>

                </div>

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                />

                {recipe.strYoutube && (
                    <a
                        className="yt-button"
                        href={recipe.strYoutube}
                        target="_blank"
                        rel="noreferrer"
                    >
                        ▶ Watch on YouTube
                    </a>
                )}

                <h3>Ingredients</h3>

                <ul>
                    {ingredients.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>

                <h3>Cooking Process</h3>

                <ol>
                    {instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>

            </div>

        </div>
    );
};

export default RecipeModel;