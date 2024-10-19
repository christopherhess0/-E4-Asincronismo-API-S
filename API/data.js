import { captureValue } from "../Functions/captureValue.js";
import { getMaxPokemons } from "../Functions/getMaxPokemons.js";


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
            alert("El id ingresado es mayor al máximo de pokemones");
            return;
        }

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const pokeObject = await res.json();
        return pokeObject;
    } catch (e) {
        console.error('Hubo un error:', e);
    }
};

