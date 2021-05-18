let competences = {
    HTML: '71%',
    CSS: '95%',
    JS : '50%',
    React: '18%',
    Laravel: '100%'
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// >*Cherche des methodes pour résoudre les énoncés suivants :*
// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-competences"
let h2 = document.querySelector('#liste-competences').querySelectorAll('h2');
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
for (const props in competences) {
    h2.forEach((element, index) => {
        if (element.innerHTML == props) {
            element.innerHTML = element.innerHTML + " " + competences[props]
            // - Si -- -- est égale à 100 alors le bakcground est gold et l'écriture est noir
            if (element.innerHTML.match(/[0-9]/g).reduce((a, b) => a + b) == 100) {
                element.style.backgroundColor = 'gold'
                // ### 3. Change le style des h2 selons certaines conditions :
                // - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
            } else if (element.innerHTML.match(/[0-9]/g).reduce((a, b) => a + b) > 50) {
                element.style.backgroundColor = 'green'
                element.style.color = 'white'
                // - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
            } else if (element.innerHTML.match(/[0-9]/g).reduce((a, b) => a + b) < 50) {
                element.style.backgroundColor = 'red'
                // - Si -- --  égale à 50 alors il n'y a pas de background
            } else if (element.innerHTML.match(/[0-9]/g).reduce((a, b) => a + b) == 50) {
                element.style.backgroundColor = 'none'
            }
        }
    });
}



