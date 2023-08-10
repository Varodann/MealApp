import React, { useState } from 'react';

function RecipeSearchForm({ onSearch }) {
    const [ingredients, setIngredients] = useState('');

    const handleInputChange = (event) => {
        setIngredients(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchRecipes();
    };

    const fetchRecipes = async () => {
        try {
            const apiKey = 'a146e672c456424cad06ded59b091aea';
            const response = await fetch(
                `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`
            );
            const data = await response.json();
            onSearch(data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ingredients}
                onChange={handleInputChange}
                placeholder="Enter ingredients..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default RecipeSearchForm;
