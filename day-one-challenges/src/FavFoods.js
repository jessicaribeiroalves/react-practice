import React from "react";
import pizza from "./images/pizza.jpeg"
import quesadilla from "./images/quesadilla.jpeg"
import pancake from "./images/pancake.jpg"
import fries from "./images/fries.jpg"

const FavFoods = () => {
  return (
    <section id="fav-foods">
      <h2>Favourite Foods</h2>
      <div>
        <h4>Pizza</h4>
        <img src={pizza} alt= "Pizza" />
        <p>Best time to eat: <span>All the time</span></p>
        <p>Best place: <span>Queen Margharitas</span></p>
      </div>
      <div>
        <h4>Quesadillas</h4>
        <img src= {quesadilla} alt="Quesadillas"/>
        <p>Best time to eat: <span>Afternoon Siesta</span></p>
        <p>Best place: <span>Mexico</span></p>
      </div>
      <div>
        <h4>Icecream Pancakes</h4>
        <img src={pancake} alt="Icecream Pancakes" />
        <p>Best time to eat: <span>Breaky</span></p>
        <p>Best place: <span>Pancakes on the Rocks</span></p>
      </div>
      <div>
        <h4>Loaded Fries</h4>
        <img src={fries} alt="Loaded Fries"/>
        <p>Best time to eat: <span>During the game</span></p>
        <p>Best place: <span>My House</span></p>
      </div>
    </section>
  );
}

export default FavFoods;