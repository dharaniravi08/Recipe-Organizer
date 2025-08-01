import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipe")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/recipe/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setRecipes(recipes.filter((recipe) => recipe._id !== id));
        alert("Recipe deleted successfully!");
      }
    } catch (err) {
      console.error("Error deleting recipe:", err);
      alert("Failed to delete.");
    }
  };

  return (
    <div className="view-recipe-page">
      <h2>All Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe-card">
            <h3>{recipe.name}</h3>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <div className="actions">
              <button className="delete-btn" onClick={() => handleDelete(recipe._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-btn">
        ← Back to Add Recipe
      </Link>
    </div>
  );
}

export default ViewRecipes;
