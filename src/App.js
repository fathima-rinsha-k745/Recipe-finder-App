import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [searchType, setSearchType] = useState("ingredient");
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter something to search.");
      setRecipes([]);
      return;
    }

    setLoading(true);
    setError("");
    setRecipes([]);

    try {
      let url = "";

      if (searchType === "ingredient") {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
          query
        )}`;
      } else {
        url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURIComponent(
          query
        )}`;
      }

      const res = await fetch(url);
      const data = await res.json();

      if (!data.meals) {
        setError("No recipes found.");
      } else {
        setRecipes(data.meals);
      }
    } catch (err) {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      {/* Search Section */}
      <div className="search-section">
        <h1 className="title">Recipe Finder</h1>

        <SearchBar
          searchType={searchType}
          setSearchType={setSearchType}
          query={query}
          setQuery={setQuery}
          onSearch={handleSearch}
        />

        {loading && <p className="info">Loading recipes...</p>}
        {error && <p className="error">{error}</p>}
      </div>

      {/* Recipe List Section */}
      {recipes.length > 0 && (
        <div className="recipe-section">
          <RecipeList recipes={recipes} />
        </div>
      )}
    </div>
  );
}

export default App;
