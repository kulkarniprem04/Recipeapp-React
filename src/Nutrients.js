import React from 'react';
import style from './recipe.module.css';

const Nutrients = ({ totalNutrients, title, onRouteChange }) => {
    return (
        <div>
            <div className={style.recipe}>
                <h1>{title}</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Label</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Unit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>{totalNutrients.CA.label}</td>
                        <td>{totalNutrients.CA.quantity}</td>
                        <td>{totalNutrients.CA.unit}</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>{totalNutrients.CHOCDF.label}</td>
                        <td>{totalNutrients.CHOCDF.quantity}</td>
                        <td>{totalNutrients.CHOCDF.unit}</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>{totalNutrients.CHOLE.label}</td>
                        <td>{totalNutrients.CHOLE.quantity}</td>
                        <td>{totalNutrients.CHOLE.unit}</td>
                        </tr>
                        <tr>
                        <th scope="row">4</th>
                        <td>{totalNutrients.ENERC_KCAL.label}</td>
                        <td>{totalNutrients.ENERC_KCAL.quantity}</td>
                        <td>{totalNutrients.ENERC_KCAL.unit}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick = {() =>onRouteChange('Recipes')} className = {style.button}>Recipes</button>
            </div>
        </div>
    );
}

export default Nutrients;