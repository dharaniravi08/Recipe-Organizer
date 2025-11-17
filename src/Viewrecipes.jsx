import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;


function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
   fetch(`${API_BASE}/recipe`)

      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error fetching recipes:", err));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE}/recipe/${id}`, { method: "DELETE" });

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
    <>
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
                <Link to={`/edit/${recipe._id}`}>
    <button className="delete-btn">Edit</button>
  </Link>
</div>
            </div>
          
        ))}
      </div>
      <Link to="/" className="back-btn">
        ← Back to Add Recipe
      </Link>
    </div>
    </>
  );
}

export default ViewRecipes;
