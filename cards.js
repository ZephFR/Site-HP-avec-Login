"use strict";

async function fetchAllCharacters() {
    return fetch('https://hp-api.lainocs.fr/characters/')
        .then(response => response.json());
}

async function displayCharacters() {
    try {
        const characters = await fetchAllCharacters();

        characters.forEach(character => {
            displayCharacter(character);
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des personnages', error);
    }
}

async function displayCharacter(character) {
    const characterElement = document.createElement('div');
    characterElement.classList.add('col-md-4');
    characterElement.innerHTML = `
        <div class="card">
            <div class="wrapper">
                <img src="${character.image}" alt="${character.name}" class="cover-image">
            </div>
            <div class="title_container container">
                <h2 class="title">Nom : ${character.name}</h2>
                <h2 class="title-sub"> Maison : ${character.house}</h2>
            </div>
            <h4 class="title-sub">ID de la carte : ${character.id}</h4>
        </div>
    `;
    document.getElementById("character").appendChild(characterElement);
}

displayCharacters();

function PartageForm() {
    var opened = new Boolean();

    if (opened == true) {
        document.getElementById('partage').style.display = 'none';
    }
    else {
        document.getElementById('partage').style.display = 'block';
    }
}

function EnvoiCarte() {
    var email = document.getElementById('email').value;
    var numero = document.getElementById('numero').value;

    
    if (email === '' || numero === '') {
        alert('Veuillez remplir tous les champs');
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Veuillez entrer une adresse email valide');
        return false;
    }

    alert("Votre carte est bien envoyée à ce destinataire.");
    return true;    
}