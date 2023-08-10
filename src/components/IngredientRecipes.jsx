import React from 'react';
import { Link } from 'react-router-dom';

function IngredientRecipes({ recipes, onSelect }) {
    return (
        <div>
            <h2>Recipes with the Selected Ingredient</h2>
            {recipes.map((recipe, index) => (
                <div key={index}>
                    <Link to={`/recipe/${recipe.id}`} onClick={() => onSelect(recipe)}>
                        <h3>{recipe.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default IngredientRecipes;
