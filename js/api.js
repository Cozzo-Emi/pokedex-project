
// SERVICIO (API)

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

/*
 * Busca un Pokémon 
 * async/await para manejar la asincronía 
 */
async function fetchPokemonData(identifier) {
    try {
        // La API exige minúsculas y sin espacios extra
        const query = identifier.toString().toLowerCase().trim();
        
        // await detiene la ejecución de ESTA función hasta que el servidor responda
        const response = await fetch(`${BASE_URL}${query}`);

        // Fetch y el error "404 No encontrado", 
        // fetch NO lo considera un error de red.  verificar 'response.ok'.
        if (!response.ok) {
            if (response.status === 404) {
                // error personalizado que nuestra interfaz va a atrapar después
                throw new Error('Pokémon no encontrado. Verifica el nombre o número.');
            }
            throw new Error('Error de conexión con el servidor.');
        }

        // conviertir respuesta a formato JSON
        const data = await response.json();
        
        //devuelve, los datos crudos del Pokémon
        return data;
        
    } catch (error) {
        throw error;
    }
}