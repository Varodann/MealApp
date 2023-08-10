import React from 'react';

function RecipeDetail({ selectedRecipe }) {
    if (!selectedRecipe) {
        return <div>No recipe selected.</div>;
    }

    return (
        <div>
            <h2>{selectedRecipe.title}</h2>
            <p>{selectedRecipe.instructions}</p>
            {/* Wyświetl obrazek i składniki */}
        </div>
    );
}

export default RecipeDetail;
