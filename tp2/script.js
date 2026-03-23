const bouton = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

bouton.addEventListener('click', () => {
    menu.classList.toggle('is-open');
    const isOpen = menu.classList.contains('is-open');
    bouton.setAttribute('aria-expanded', isOpen);
});
// on commence par sélectionner les élèments, 
// puis on ajoute l'évènement et on met en place la bonne classe selon l'évènement

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')){
        menu.classList.remove('is-open');
        bouton.focus();
    }
});
// on a ajouté un évènement permettant de sortir du menu
// Celui-ci réagit à la touche échape

const btnOpen = document.querySelector('.modal-open');
const btnClose = document.querySelector('.modal-close');
const modal = document.querySelector('.modal');
// //Mise en place des élèments et de leur référence dans le CSS

// btnOpen.addEventListener('click', () => {
//   modal.classList.add('is-visible');
// });
// //Rend le modal visible lorsque le bouton btnOpen est cliqué

// btnClose.addEventListener('click', () => {
//   modal.classList.remove('is-visible');
// });
// //Enlève l'état "is-visible" au modal, donc retour à son état de base

// document.addEventListener('keydown', (event) => {
//   if (event.key === 'Escape' && modal.classList.contains('is-visible')) {
//     modal.classList.remove('is-visible');
//     btnOpen.focus();
//   }
// });
// //Lorsque échape est utilisé, ceci enlève l'état "is-visible" au modal
// // Donc retour à l'état de base

// modal.addEventListener('click', (event) => {
//   // Si le clic est sur le fond (la modale elle-même), pas sur son contenu
//   if (event.target === modal) {
//     modal.classList.remove('is-visible');
//     btnOpen.focus();
//   }
// });

function ouvrirModale() {
  modal.classList.add('is-visible');
  modal.setAttribute('aria-hidden', 'false');
}

function fermerModale() {
  modal.classList.remove('is-visible');
  modal.setAttribute('aria-hidden', 'true');
  btnOpen.focus();
}

btnOpen.addEventListener('click', ouvrirModale);
btnClose.addEventListener('click', fermerModale);

//Utilisé fonction!! Plus rapide et lisible
//Une seule déf pour toute les utilisations

const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const reponse = question.nextElementSibling;
    const estDejaOuverte = reponse.classList.contains('is-visible');

    // Fermer toutes les réponses
    document.querySelectorAll('.faq-answer').forEach((r) => {
        r.classList.remove('is-visible');
    });

    // Si elle n'était pas ouverte, l'ouvrir
    if (!estDejaOuverte) {
      reponse.classList.add('is-visible');
    }

  });
});
//Mise en place de l'élèment et de sa référence dans le CSS, 
// puis mise en place de l'évènement qui "déroule les réponses" 
// lorsque le bouton '.faq-question' est cliqué

const btnTheme = document.querySelector('#theme-toggle');

btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  const isDark = document.body.classList.contains('dark');
  btnTheme.textContent = isDark ? '☀️ Clair' : '🌙 Sombre';
});