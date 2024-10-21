import { captureValue } from "../Functions/captureValue.js";
import { getMaxPokemons } from "../Functions/getMaxPokemons.js";
import { maxPokeShowError } from "../Functions/maxPokeShowError.js";
import { removePokeError } from "../Functions/removePokeError.js";
import { clearElementContent } from "../Functions/clearElementContent.js";
export const getData = async () => {
    const id = captureValue();
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    try {
        const maxPoke = await getMaxPokemons();        
        if (maxPoke === null || maxPoke === undefined) {
            alert("Hubo un error al obtener el número máximo de pokemones.");
            
            return;
        }
        if (id > maxPoke) {
            console.log("El ID es mayor al número de Pokémon disponibles");
            
            return;
        }

        const res = await fetch(url);
        if (!res.ok) {
            maxPokeShowError();
            clearElementContent();
            throw new Error('Error al obtener los datos de la API');
            
        }
        removePokeError()
        const pokeObject = await res.json();
        return pokeObject;
    } catch (e) {
        console.error('Hubo un error:', e);
    }
};

