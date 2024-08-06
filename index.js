document.getElementById('searchButton').addEventListener('click', function() {
    const pokemonInput = document.getElementById('pokemonInput').value.toLowerCase();
    const pokemonInfo = document.getElementById('pokemonInfo');
    const pokemonImage = document.getElementById('pokemonImage');
    const pokemonName = document.getElementById('pokemonName');
    const pokemonType = document.getElementById('pokemonType');
    const pokemonHeight = document.getElementById('pokemonHeight');
    const pokemonWeight = document.getElementById('pokemonWeight');
    const pokemonAbilities = document.getElementById('pokemonAbilities');

    if (pokemonInput) {
        
        pokemonImage.style.display = 'none';
        pokemonName.textContent = '';
        pokemonType.textContent = '';
        pokemonHeight.textContent = '';
        pokemonWeight.textContent = '';
        pokemonAbilities.textContent = '';

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`)
            .then(response => response.json())
            .then(data => {
                
                pokemonImage.src = data.sprites.front_default;
                pokemonImage.style.display = 'block';
                pokemonName.textContent = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                pokemonType.textContent = `Tipo(s): ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}`;
                pokemonHeight.textContent = `Altura: ${(data.height / 10).toFixed(1)} m`;
                pokemonWeight.textContent = `Peso: ${(data.weight / 10).toFixed(1)} kg`;
                pokemonAbilities.textContent = `Habilidade(s): ${data.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}`;
            })
            .catch(error => {
                console.error('Erro ao buscar dados do Pokémon:', error);
                alert('Pokémon não encontrado. Verifique o nome ou número e tente novamente.');
            });
    } else {
        alert('Por favor, digite um nome ou número de Pokémon.');
    }
});