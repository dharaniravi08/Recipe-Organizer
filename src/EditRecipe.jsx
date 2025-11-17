import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({name: "", ingredients: "", instructions: "" });

  useEffect(() => {
    fetch(`http://localhost:5000/recipe/${id}`)
      .then(res => res.json())
      .then(data => {
        setRecipe({
          name: data.name,
          ingredients: data.ingredients.join(", "),
          instructions: data.instructions
        });
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.split(",").map(item => item.trim()),
    };

    const response = await fetch(`http://localhost:5000/recipe/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    });

    if (response.ok) {
      alert("Recipe updated!");
      navigate("/view"); // or wherever your list page is
    } else {
      alert("Failed to update");
    }
  };

  return (
    <div className="add-recipe-container">
      <h2>Edit Recipe</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <input name="name" value={recipe.name} onChange={handleChange} placeholder="Recipe_Title" required />
              </div>
              <div className="form-group">
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} placeholder="Ingredients (comma separated)" required />
              </div>
              <div className="form-group">
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} placeholder="Instructions" required />
              </div>
        
              <button className="add-btn">Update Recipe</button>

                  
      </form>
    </div>
  );
}

export default EditRecipe;
