import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail({ selectedRecipe, recipeDetails }) {
    const { id } = useParams();

    const selectedDetails = recipeDetails && recipeDetails.id === Number(id) ? recipeDetails : null;

    if (!selectedRecipe) {
        return <div>No recipe selected.</div>;
    }

    return (
        <div>
            <h2>{selectedRecipe.title}</h2>
            <p>{selectedRecipe.instructions}</p>
            {selectedDetails && (
                <div>
                    <h3>Recipe Details</h3>
                    <p>{selectedDetails.text}</p>
                    <img src={selectedDetails.image} alt="Recipe" />
                </div>
            )}
        </div>
    );
}

export default RecipeDetail;
