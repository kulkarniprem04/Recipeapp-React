import React, { useState } from 'react';
import Recipe from './Recipe';
import './App.css';
import Nutrients from './Nutrients.js'
import LandingPage from './Landingpage';


const App = () => {

  const APP_ID = "3f335994";
  const APP_KEY = "8e99e327d1f2130dc6ab3422e26a95e8";

  /*const APP_ID2 = "d034700d";
  const APP_KEY2 = "a95f879dbf844bd03f12c0ff7d65d982";*/

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  //const [query, setQuery] = useState('');
  const [route, setRoute] = useState('landingpage')

  //const [counter,setCounter] = useState(0);

  

  /*useEffect(() => {
    console.log('usEffect has been run');
    getRequest();
    //getNutrients();
  }, [query]);*/

   const getRequest = async () => {
    //setQuery(search)
    const response=await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    
    console.log(data);
    /*.then(response => response.json())
    .then(data => console.log(data))*/
  }

  
/*const postData = async function() {
  try {
      let result = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${APP_ID2}&app_key=${APP_KEY2}`, {
        method: 'post',
        mode: 'np-cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          key1: {recipe}
        })
      });

      console.log(result);
      
  } catch (error) {
      console.log(error);
      }

  }*/

  /*const getNutrients = async () => {
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID2}&app_key=${APP_KEY2}`)
    .then(response => response.json())
    .then(data => console.log(data))
  }*/

   const updateSearch = (event) => {
    setSearch(event.target.value);
    //console.log(search);
  };

   const getSearch = (event) => {
    event.preventDefault();
    //setQuery(search);
    setSearch('');
  }

  const onRouteChange = (route) => {
    if (route === 'landingpage') {
      setRoute('landingpage')
    }
    if (route === 'Recipes') {
      setRoute('Recipes')
    }
    setRoute(route)
  
  }

  return ( 
    <div className="App">
      <form onSubmit={getSearch} className="searchform">
          <input className="searchbar" type="text" value={search} onChange={updateSearch} />
              <button onClick = {getRequest } className="searchbutton" type="submit">
                  search
              </button> 
      </form>
      <div className="recipes">
        { route === 'landingpage'
          ?<LandingPage onRouteChange = {onRouteChange} />
          :(
            route === 'Recipes'
            ?  recipes.map((recipe,key) => (
                  <Recipe
                  key={recipe.recipe.calories}
                  title={recipe.recipe.label} 
                  image={recipe.recipe.image}
                  calories = {recipe.recipe.calories}
                  ingredients={recipe.recipe.ingredients}
                  onRouteChange = {onRouteChange}
                  /> 
              ))
              
            :(
              recipes.map(recipe => (
                <Nutrients 
                  totalNutrients = {recipe.recipe.totalNutrients}
                  title={recipe.recipe.label}
                  onRouteChange = {onRouteChange}/>
              ))
            )

          )
        }   
      </div>
    </div>
  );
}

export default App;
