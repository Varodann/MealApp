import React from 'react';
import { Link } from 'react-router-dom';

function RecipeItem({ recipe, onSelect }) {
    return (
        <Link
            to={`/recipe/${recipe.id}`} // Przekieruj na stronę przepisu
            style={{ textDecoration: 'none' }}
        >
            <div className="recipe-item" onClick={onSelect}>
                <h3>{recipe.title}</h3>
                <p>{recipe.summary}</p>
            </div>
        </Link>
    );
}

export default RecipeItem;
