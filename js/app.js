
// CONTROLADOR PRINCIPAL 

// ==========================================
// MÚSICA DE FONDO (CONTROL MANUAL)
// ==========================================
const bgMusic = new Audio('assets/theme.mp3');
bgMusic.loop = true;  
bgMusic.volume = 0.1; 

let isMusicPlaying = false; // Variable para saber si está sonando o no

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(error => console.log("Error al reproducir", error));
        isMusicPlaying = true;
    }
    // Le pedimos a ui.js que cambie el color y texto del botón
    updateAudioButton(isMusicPlaying); 
}

// Escuchamos el clic explícito en el botón de audio
uiElements.audioToggle.addEventListener('click', toggleMusic);


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