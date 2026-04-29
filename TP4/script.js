// TP4 — Fetch & API
// Complétez ce fichier en suivant les exercices du sujet.

// ===========================================
// TEMPS 1 — JSON local (exercices 1.1 à 1.3)
// ===========================================

const conteneur = document.querySelector('#projets-liste');

async function chargerEtAfficher() {
  // État : chargement
  conteneur.innerHTML = '<p class="loading">Chargement...</p>';

  try {
    const reponse = await fetch('./data.json');

    if (!reponse.ok) {
      throw new Error(`Erreur HTTP : ${reponse.status}`);
    }

    const donnees = await reponse.json();

    // État : succès
    afficherProjets(donnees.projets);

  } catch (erreur) {
    // État : erreur
    conteneur.innerHTML = `<p class="error">Impossible de charger les données : ${erreur.message}</p>`;
    console.error(erreur);
  }
}

function afficherProjets(projets) {
  conteneur.innerHTML = '';
  projets.forEach((projet) => {
    const carte = document.createElement('article');
    carte.classList.add('carte');
    carte.innerHTML = `
      <h3>${projet.titre}</h3>
      <p>${projet.description}</p>
      <p class="annee">${projet.annee}</p>
      <div class="tags">
        ${projet.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    `;
    conteneur.append(carte);
  });
}

// Lancer au chargement
chargerEtAfficher();

// ===========================================
// TEMPS 2 — API distante (exercices 2.1 à 2.3)
// ===========================================
const api = document.querySelector('#api-liste');

async function chargerPokemon() {
  api.innerHTML = '<p class="loading">Chargement des pays...</p>';

  try {
    const reponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
    const pokemon = await reponse.json();

    api.innerHTML = '';
    pokemon.results.forEach((p) => {
      const carte = document.createElement('article');
      carte.classList.add('carte');
      carte.innerHTML = `
        <h3>${p.name}</h3>
      `;
      api.append(carte);
    });

  } catch (erreur) {
    api.innerHTML = '<p class="error">Impossible de charger les pokémon.</p>';
  }
}

chargerPokemon();

// ===========================================
// TEMPS 3 — Recherche + API (exercices 3.1 et 3.2)
// ===========================================

const input = document.querySelector('#recherche');

input.addEventListener('input', async () => {
  const terme = input.value.trim();

  if (terme.length < 2) {
    api.innerHTML = '<p>Tapez au moins 2 caractères.</p>';
    return;
  }

  api.innerHTML = '<p class="loading">Recherche...</p>';

  try {
    const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${terme}?limit=20`);

    if (!reponse.ok) {
      api.innerHTML = '<p>Aucun résultat.</p>';
      return;
    }

    const p = await reponse.json();
    api.innerHTML = '';
    // pokemon.results.forEach((p) => {
        const carte = document.createElement('article');
        carte.classList.add('carte');
        carte.innerHTML = `
            <h3>${p.forms[0].name}</h3>
    `;
    api.append(carte);
//   });

  } catch (erreur) {
    api.innerHTML = '<p class="error">Erreur de recherche.</p>';
  }
});

// ===========================================
// TEMPS 4 — Bonus (exercices 4.1 à 4.3)
// ===========================================

// Votre code ici...
