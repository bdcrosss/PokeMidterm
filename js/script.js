function toggleMenu() {
    const menu = document.querySelector("#nav-menu"); 
    menu.classList.toggle("show");
}

async function loadPokemon() {
    const container = document.querySelector("#pokedex"); 

    for (let i = 1; i <= 1025; i++) {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const data = await response.json();

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name}</h3>
                <p>#${data.id}</p>
            `;

            container.appendChild(card);

        } catch (error) {
            console.log("Error loading Pokémon:", error);
        }
    }
}

loadPokemon();

const searchInput = document.querySelector("#search"); 

searchInput.addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const name = card.innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});