const pokemonContainer = document.querySelector(".pokemon-container");


function fetchOnePokemon (id) {
    fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(res => res.json())
    .then(data => createPokemonCard(data))
}

 function fetchManyPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchOnePokemon(i);
    }
}

let pokemon = [];

function createPokemonCard(pokemon) {

//tarjeta pokemon//
const card = document.createElement("div");
card.classList.add("pokemon-card");

//imagen-container//
const spriteContainer = document.createElement("div");
spriteContainer.classList.add("img-container");

//imagen//
const sprite = document.createElement("img");
sprite.src = pokemon.sprites.front_default;

//nombre//
const name = document.createElement("p");
name.classList.add("name");
name.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

//link a más info//
const aTag = document.createElement ('a');
aTag.classList.add('link');
aTag.setAttribute('href', 'pokemon.html');
aTag.textContent = "More info";

//Añadir elementos a la card//
spriteContainer.appendChild(sprite);
card.appendChild(spriteContainer);
card.appendChild(name);
card.appendChild(aTag);

pokemonContainer.appendChild(card);

}
//Ejecutar para llamar a los primeros X pokémons de la API.//
fetchManyPokemons(54);