
// PRESENTACIÓN (UI - DOM)


// 1. Centralizar elementos del DOM
const uiElements = {
    input: document.getElementById('searchInput'),
    button: document.getElementById('searchButton'),
    statusMessage: document.getElementById('statusMessage'),
    pokemonContainer: document.getElementById('pokemonContainer'),
    audioToggle: document.getElementById('audioToggle') // agrego botón
};

function updateAudioButton(isPlaying) {
    if (isPlaying) {
        uiElements.audioToggle.textContent = '🔊 Música On';
        uiElements.audioToggle.style.backgroundColor = '#ffcc00'; 
    } else {
        uiElements.audioToggle.textContent = '🔇 Música Off';
        uiElements.audioToggle.style.backgroundColor = '#8bac0f'; 
    }
}

/*
 * Muestra un mensaje en pantalla (cargando, errores, etc.)
 */
function showStatus(message, isError = false) {
    // Esconde la tarjeta del Pokémon
    uiElements.pokemonContainer.classList.add('hidden');
    
    // Mostrar el mensaje
    uiElements.statusMessage.textContent = message;
    uiElements.statusMessage.classList.remove('hidden');
    
    // Le cambiamos el color del error o un mensaje de carga
    uiElements.statusMessage.style.color = isError ? '#ffaaaa' : '#ffcc00';
}

/**
 * Dibuja la tarjeta del Pokémon  y reproduce su sonido
 */
function renderPokemon(pokemonData) {
    uiElements.statusMessage.classList.add('hidden');
    
    const { name, sprites, types, height, weight, id, cries } = pokemonData;
    
    const tiposFormateados = types.map(t => t.type.name).join(', ');

    uiElements.pokemonContainer.innerHTML = `
        <img src="${sprites.front_default}" alt="Imagen de ${name}">
        <h2>Nº ${id} - ${name}</h2>
        <p>TIPO: ${tiposFormateados}</p>
        <p>ALTURA: ${height / 10} m</p>
        <p>PESO: ${weight / 10} kg</p>
    `;

    uiElements.pokemonContainer.classList.remove('hidden');

    
    // REPRODUCIR AUDIO DEL POKÉMON
    
    if (cries && (cries.latest || cries.legacy)) {
        const urlSonido = cries.latest || cries.legacy; 
        
        const reproductor = new Audio(urlSonido);
        reproductor.volume = 0.4; 
        
        reproductor.play().catch(error => console.log("El navegador bloqueó el audio", error));
    }
}

function clearInput() {
    uiElements.input.value = '';
    uiElements.input.focus();
}