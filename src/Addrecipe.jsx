import React, { useState } from "react";
import { Link } from "react-router-dom";
const API_BASE = import.meta.env.VITE_API_BASE;



function AddRecipe() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ingredientsArray = ingredients
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    const recipeData = {
      name: title,
      ingredients: ingredientsArray,
      instructions: instructions,
    };

    try {
     const response = await fetch(`${API_BASE}/recipe`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(recipeData),
});


      if (response.ok) {
        const data = await response.json();
        console.log("Recipe added:", data);
        alert("Recipe added successfully!");

        setTitle("");
        setIngredients("");
        setInstructions("");
      } else {
        alert("Failed to add recipe");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Add Your Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Recipe Title</label>
          <input
            type="text"
            placeholder="E.g., Masala Dosa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Ingredients (comma-separated)</label>
          <textarea
            placeholder="List all ingredients separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
            rows="4"
          />
        </div>

        <div className="form-group">
          <label>Instructions</label>
          <textarea
            placeholder="Write the steps to prepare the dish..."
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
            rows="5"
          />
        </div>

        <button className="add-btn" type="submit">
          Add Recipe
        </button>
      </form>

      <Link to="/view" >
      <button className="view-btn"> View Recipes</button> 
      </Link>
    </div>
  );
}



export default AddRecipe;
