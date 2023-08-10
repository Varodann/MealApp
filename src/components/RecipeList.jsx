import React from 'react';
import RecipeItem from './RecipeItem';

function RecipeList({ recipes, onSelect }) {
    return (
        <div>
            {recipes.map((recipe, index) => (
                <RecipeItem key={index} recipe={recipe} onSelect={() => onSelect(recipe)} />
            ))}
        </div>
    );
}

export default RecipeList;
