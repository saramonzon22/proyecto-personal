export class PokemonCard{
    constructor(pokemon){
        this.pokemon = pokemon;
        this.card = document.createElement('div');
        this.card.className = 'pokemon__card';
        this.card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        <h3>${(pokemon.name).toUpperCase()}</h3>
      `;
    }

    render(parentElement){
        parentElement.appendChild(this.card)
    }
}