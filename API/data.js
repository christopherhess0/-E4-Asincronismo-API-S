const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getData = async () => {
    try {
        const res = await fetch(POKEAPI_URL);
        if (!res.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = await res.json();
        console.log(data);
    } catch (e) {
        console.error('Hubo un error:', e);
    }
}


