import React from 'react';

const RecipePreview = (recipe) => (
  <div className="RecipePreview">
    <div className="recipe-title">
      {recipe.title}
    </div>
    <div className="recipe-description">
      {recipe.description}
    </div>
  </div>
);

export default RecipePreview;
