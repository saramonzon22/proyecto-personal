export class PokemonCard {
    constructor(pokemon) {
        this.pokemon = pokemon;
        const storedFavState = localStorage.getItem(`fav-${pokemon.name}`);
        this.isFav = storedFavState === 'true';
        this.card = document.createElement("div");
        this.card.className = "pokemon__card";
        this.card.innerHTML = `
        <img src="" alt="no-fav" class="pokeball__nofav" />     
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
            <h3>${pokemon.name.toUpperCase()}</h3>
        `;
    }

    changeFav() {
        this.isFav = !this.isFav;

        if (this.favIcon) {
            if (this.isFav) {
                this.favIcon.src = "../../images/icons/pokeball-fav.svg";
            } else {
                this.favIcon.src = "../../images/icons/pokeball-no-fav.svg";
            }
        } else {
            console.error("El elemento favIcon no fue encontrado.");
        }
        localStorage.setItem(`fav-${this.pokemon.name}`, this.isFav.toString());

    }

    render(parentElement) {
        parentElement.appendChild(this.card);

        this.favIcon = this.card.querySelector(".pokeball__nofav");

        console.log(this.isFav);
        

        if (this.isFav) {
            this.favIcon.src = "../../images/icons/pokeball-fav.svg"; 
        } else {
            this.favIcon.src = "../../images/icons/pokeball-no-fav.svg"; 
        }

        if (this.favIcon) {
            this.favIcon.addEventListener("click", this.changeFav.bind(this));
        } else {
            return;
        }
    }
}
