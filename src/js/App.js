import { PokemonCard } from '../js/components/PokemonCard.js';
import pokemonData from "../js/services/api.js";
import '../css/main.css';

const pokemonContainer = document.getElementById('pokemon-container');
const pokeball = document.querySelector(".pokeball__nofav");


const changeFav = () => {
  console.log("favorito")
};

const createPkmCard = () => {
pokemonData().then(pokemons => {
  pokemons.forEach(pokemon => {
    const card = new PokemonCard(pokemon);
    card.render(pokemonContainer);
  });
}).catch(error => console.error(error));
}


createPkmCard();
