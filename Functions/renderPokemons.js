const cardContainer = document.querySelector('.cardContainer')
import { captureValue } from "./captureValue.js"
import { getData } from "../API/data.js"


export const renderPokemons = async (e, data) => {
    e.preventDefault();
    const pokemon = await getData();
    console.log(pokemon);
    const {
        forms : [{name : pokeName}],
        sprites: {front_default: pokeImage},
        types: [{type: {name: pokeType}}],
        id: pokeId,
        height: pokeHeight,
        weight: pokeWeight
        

    } = pokemon;
    console.log(pokeName)
    const htmlContent = `<div class="cardPokemon">
  <p class="pokemonName">${pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}</p>
  <img src="${pokeImage}" alt="" class="imagePokemon">
  <p class="">Tipo: ${pokeType.charAt(0).toUpperCase() + pokeType.slice(1)}</p>
  <p class="">Altura: ${pokeHeight / 10} mts</p>
  <p class="">Peso: ${pokeWeight / 10} kg</p>
</div>`;

cardContainer.innerHTML = htmlContent;
    
    

    

}