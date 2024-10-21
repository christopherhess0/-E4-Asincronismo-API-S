export const getMaxPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1');
        const data = await response.json();
        const numeroMaxPokemones = data.count;
        console.log("Número máximo de pokemones:", numeroMaxPokemones);
        return numeroMaxPokemones;
    } catch (error) {
        console.error('Error al obtener los Pokémon:', error);
        return null;

    }
};
