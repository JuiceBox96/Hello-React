import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = ""

const background = (
  <img 
  class="background" alt="ocean" src="/images/ocean.jpg"/>
);

const images = []

for (const animal in animals) {
  images.push(
      <img 
    key={animal}
    classname = 'animal'
    alt = {animal}
    src = {animals[animal].image}
    aria-label = {animal}
    role ='button'
    onClick = {displayFact}
  />
  )
};

function displayFact(e) {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);

  const funFact = animInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title == "" ?  "Click an animal for a fun fact" : title}</h1>
    {background}
    <div className = "animals">
      {images}
      <p id="fact">

      </p>
    </div>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById('root'));
