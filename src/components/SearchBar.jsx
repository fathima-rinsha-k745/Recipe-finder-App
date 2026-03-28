// src/components/SearchBar.jsx
function SearchBar({ searchType, setSearchType, query, setQuery, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-bar">
      <select
        value={searchType}
        onChange={(e) => setSearchType(e.target.value)}
        className="search-select"
      >
        <option value="ingredient">Ingredient</option>
        <option value="cuisine">Cuisine</option>
      </select>

      <input
        type="text"
        placeholder={
          searchType === "ingredient"
            ? "e.g. chicken, tomato"
            : "e.g. Italian, Indian"
        }
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input"
      />

      <button onClick={onSearch} className="search-button">
        Search
      </button>
    </div>
    
  );
}

export default SearchBar;
