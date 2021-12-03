import React, { useState } from "react";
import Recipe from "./Recipe";
import Nutrients from "./Nutrients";

const RecipeSearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [route, setRoute] = useState("landingpage");
  const APP_ID = "3f335994";
  const APP_KEY = "8e99e327d1f2130dc6ab3422e26a95e8";

  const updateSearch = event => {
    setSearch(event.target.value);
    //console.log(search);
  };

  const getSearch = event => {
    event.preventDefault();
    //setQuery(search);
    setSearch("");
  };

  const getRequest = async () => {
    //setQuery(search)
    if (search === "") {
      setError("Search query cannot be empty");
    } else {
      setError("");
      const response = await fetch(
        `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);

      console.log(data);
    }
    /*.then(response => response.json())
      .then(data => console.log(data))*/
  };

  const onRouteChange = route => {
    if (route === "landingpage") {
      setRoute("landingpage");
    }
    if (route === "Recipes") {
      setRoute("Recipes");
    }
    setRoute(route);
  };

  return (
    <div>
      <p id="recipe_error">{error}</p>
      <form onSubmit={getSearch} className="searchform">
        <input
          id="searchbar"
          className="searchbar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button onClick={getRequest} className="searchbutton" type="submit">
          search
        </button>
      </form>
      <div className="recipes">
        {route === "Recipes"
          ? recipes.map((recipe, key) => (
              <Recipe
                key={recipe.recipe.calories}
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                calories={recipe.recipe.calories}
                ingredients={recipe.recipe.ingredients}
                onRouteChange={onRouteChange}
              />
            ))
          : recipes.map(recipe => (
              <Nutrients
                totalNutrients={recipe.recipe.totalNutrients}
                title={recipe.recipe.label}
                onRouteChange={onRouteChange}
              />
            ))}
      </div>
    </div>
  );
};

export default RecipeSearchPage;
