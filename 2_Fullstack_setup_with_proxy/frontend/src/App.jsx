import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import axios from 'axios'
function App() {
  const [recipes, setRecipes] = useState([])
  console.log(recipes);
useEffect(() => {
    axios.get("/api/v1/recipes")
    .then(response => setRecipes(response.data))
    .catch(error => console.error("Error:", error));
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default App
