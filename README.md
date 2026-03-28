🍽️ Recipe Finder App

A simple and responsive Recipe Finder Web Application built using React.js that allows users to search for recipes based on ingredients or cuisine. The app fetches real-time data from the TheMealDB API and displays recipes in an interactive UI.

🚀 Features
🔍 Search recipes by ingredient
🌍 Search recipes by cuisine (area)
📡 Fetch real-time data from API
🎨 Clean and responsive UI with background image
⚡ Fast and dynamic rendering using React
❗ Error handling for invalid searches

🛠️ Tech Stack
Frontend: React.js, HTML5, CSS3, JavaScript (ES6)
API: TheMealDB REST API
Tools: VS Code, npm

📦 Installation & Setup

Follow these steps to run the project locally:

# Clone the repository
git clone https://github.com/your-username/recipe-finder.git

# Navigate to project folder
cd recipe-finder

# Install dependencies
npm install

# Start the development server
npm start

Then open:
http://localhost:3000

🔗 API Used
This project uses the free public API:
TheMealDB: https://www.themealdb.com/api.php
Endpoints:
Search by ingredient:
https://www.themealdb.com/api/json/v1/1/filter.php?i=ingredient
Search by cuisine:
https://www.themealdb.com/api/json/v1/1/filter.php?a=cuisine

📁 Project Structure
src/
 ├── components/
 │    ├── SearchBar.jsx
 │    ├── RecipeList.jsx
 │    └── RecipeCard.jsx
 ├── assets/
 │    └── bgphoto.jpg
 ├── App.js
 ├── App.css
 └── index.js
 
💡 How It Works
User enters an ingredient or selects a cuisine
React handles input using state (useState)
App sends request to TheMealDB API
API returns recipe data in JSON format
Recipes are displayed dynamically in UI

⚠️ Limitations
Requires internet connection
Depends on third-party API
Limited filtering options

🔮 Future Enhancements
Multi-ingredient search
Recipe detail page
Favorite recipes feature
Backend integration
Mobile responsiveness improvements

👩‍💻 Author
Your Name
GitHub: https://github.com/fathima-rinsha-k745

⭐ If you like this project
Give it a ⭐ on GitHub!
