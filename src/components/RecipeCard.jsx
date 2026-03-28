// src/components/RecipeCard.jsx
function RecipeCard({ meal }) {
  const { strMeal, strMealThumb, idMeal } = meal;

  const handleOpen = () => {
    // Open full recipe info in a new tab (TheMealDB provides a page)
    window.open(
      `https://www.themealdb.com/meal.php?c=${idMeal}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="recipe-card" onClick={handleOpen}>
      <img src={strMealThumb} alt={strMeal} className="recipe-image" />
      <div className="recipe-body">
        <h3>{strMeal}</h3>
        <p>Click for details</p>
      </div>
    </div>
  );
}

export default RecipeCard;
