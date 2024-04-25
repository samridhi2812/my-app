import React from 'react';
import './index.css'; 
import RedVelvetImage from './red_velvet.jpg.png';
import VanillaCakeImage from './vanilla_cake.jpg.png';
import ChocolateCakeImage from './chocolate_cake.jpg'; 

function App() {
  return (
    <div className="container">
      <header>
        <h1>CAKE RECIPES</h1>
      </header>
      <main>
        <div className="recipe-container">
          <div className="image">
            <center><img src={RedVelvetImage} alt="Red Velvet Cake" /></center>
          </div>
          <div className="details">
            <h2>Red Velvet Cake</h2>
            <p>This is a delicious red velvet cake recipe.</p>
            <h3>Recipe:</h3>
            <ul>
              <li>1 1/2 cups granulated sugar</li>
              <li>1/2 cup unsalted butter, softened</li>
              <li>2 large eggs</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 cup buttermilk</li>
              <li>2 tablespoons red food coloring</li>
              <li>2 1/2 cups all-purpose flour</li>
              <li>1/4 cup cocoa powder</li>
              <li>1 teaspoon baking soda</li>
              <li>1 teaspoon salt</li>
              <li>1 tablespoon distilled white vinegar</li>
            </ul>
          </div>
        </div>
        <div className="recipe-container">
          <div className="image">
            <center><img src={VanillaCakeImage} alt="Vanilla Cake" /></center>
          </div>
          <div className="details">
            <h2>Vanilla Cake</h2>
            <p>This is a classic vanilla cake recipe.</p>
            <h3>Recipe:</h3>
            <ul>
              <li>2 1/2 cups all-purpose flour</li>
              <li>2 1/2 teaspoons baking powder</li>
              <li>1/2 teaspoon salt</li>
              <li>1 cup unsalted butter, softened</li>
              <li>2 cups granulated sugar</li>
              <li>4 large eggs</li>
              <li>1 tablespoon vanilla extract</li>
              <li>1 cup whole milk</li>
            </ul>
          </div>
        </div>
        <div className="recipe-container"> 
          <div className="image">
           <center> <img src={ChocolateCakeImage} alt="Chocolate Cake" /></center>
          </div>
          <div className="details">
            <h2>Chocolate Cake</h2>
            <p>This is a rich and decadent chocolate cake recipe.</p>
            <h3>Recipe:</h3>
            <ul>
              <li>2 cups all-purpose flour</li>
              <li>2 cups granulated sugar</li>
              <li>3/4 cup unsweetened cocoa powder</li>
              <li>2 teaspoons baking powder</li>
              <li>1 1/2 teaspoons baking soda</li>
              <li>1 teaspoon salt</li>
              <li>2 large eggs</li>
              <li>1 cup milk</li>
              <li>1/2 cup vegetable oil</li>
              <li>2 teaspoons vanilla extract</li>
              <li>1 cup boiling water</li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2024 Sweet Retreat Inc.</p>
      </footer>
    </div>
  );
}
export default App;
