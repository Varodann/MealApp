import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeSearchForm from './components/RecipeSearchForm';
import RecipeList from './components/RecipeList';
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
                    <Switch>
                        <Route exact path="/">
                            <RecipeSearchForm onSearch={handleSearch} />
                            <RecipeList recipes={recipes} onSelect={handleRecipeSelect} />
                        </Route>
                        <Route path="/recipe/:id">
                            <RecipeDetail selectedRecipe={selectedRecipe} />
                        </Route>
                    </Switch>
                </main>
                <footer className="footer">
                    <p>© 2023 Recipe Search App</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
