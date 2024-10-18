import { captureValue } from "../Functions/captureValue.js";

export const getData = async () => {
    const id = captureValue()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const pokeObject = await res.json();
        return pokeObject
    } catch (e) {
        console.error('Hubo un error:', e);
    }
}



