import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, ingredients, onRouteChange }) => {
    return (
        <div>
            <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calories :-</b>{calories}</p>
            <img  className={style.image} src={image} alt="" />
                <button onClick = {() =>onRouteChange('Nutrients')} className = {style.button}>Nutrients</button>
            </div>
            
        </div>
    );
}

export default Recipe;