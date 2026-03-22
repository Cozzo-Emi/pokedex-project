
// CONTROLADOR PRINCIPAL 

// MÚSICA DE FONDO (REGLA DEL PRIMER CLIC)

const bgMusic = new Audio('assets/theme.mp3');
bgMusic.loop = true;  // Que se repita infinitamente
bgMusic.volume = 0.1; // Volumen muy bajito 
function startMusic() {
    if (bgMusic.paused) {
        bgMusic.play().catch(error => {
            console.log("El navegador aún no nos deja reproducir audio.");
        });
    }
}

//  El PRIMER clic o tecla en la página para saltar la restricción 
document.body.addEventListener('click', startMusic, { once: true });
document.body.addEventListener('keypress', startMusic, { once: true });


// LÓGICA DE BÚSQUEDA

async function handleSearch() {
    const inputValue = uiElements.input.value.trim();

    if (inputValue === '') {
        showStatus('¡Ingresa un nombre o número!', true);
        return;
    }

    showStatus('Buscando en la hierba alta...');

    try {
        const pokemonData = await fetchPokemonData(inputValue);
        renderPokemon(pokemonData);
        clearInput();

    } catch (error) {
        showStatus(error.message, true);
    }
}

uiElements.button.addEventListener('click', handleSearch);

uiElements.input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});