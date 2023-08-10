import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RecipeSearchForm from './components/RecipeSearchForm';
import IngredientRecipes from './components/IngredientRecipes';
import RecipeDetail from './components/RecipeDetail';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const handleSearch = (data) => {
        setRecipes(data);
        setSelectedRecipe(null);
    };

    const handleRecipeSelect = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <Router>
            <div className="app">
                <header className="header">
                    <h1>Recipe Search App</h1>
                </header>
                <main className="main">
                    <Route exact path="/">
                        <RecipeSearchForm onSearch={handleSearch} />
                        <IngredientRecipes recipes={recipes} onSelect={(recipe) => console.log(recipe)} />
                    </Route>
                    <Route path="/recipe/:id">
                        <RecipeDetail selectedRecipe={selectedRecipe} />
                    </Route>
                </main>
                <footer className="footer">
                    <p>© 2023 Recipe Search App</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
