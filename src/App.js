import React, { useState } from "react";
import Recipe from "./Recipe";
import "./App.css";
import Nutrients from "./Nutrients.js";
import LandingPage from "./Landingpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Register from "./register";
import RecipeSearchPage from "./RecipeSearchPage";

const App = () => {
  /*const APP_ID2 = "d034700d";
  const APP_KEY2 = "a95f879dbf844bd03f12c0ff7d65d982";*/

  //const [query, setQuery] = useState('');
  const [route, setRoute] = useState("landingpage");

  //const [counter,setCounter] = useState(0);

  /*useEffect(() => {
    console.log('usEffect has been run');
    getRequest();
    //getNutrients();
  }, [query]);*/

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

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipes" element={<RecipeSearchPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
