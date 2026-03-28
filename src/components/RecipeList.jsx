// src/components/RecipeList.jsx
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((meal) => (
        <RecipeCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}

export default RecipeList;
