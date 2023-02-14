ttps://labw.u-angers.fr/favicon.ico// Création de la fonction quiz_verification() 

function quiz_verification() {
    // Variable contenant les solutions  
    var soluce = [2,4,2,1,3,4]; 
    
    
    // Création des variables 
    var score = 0; 
    var nbr_questions = soluce.length;
    var tout_cocher = true;
    
    // Création des listes
    var fieldset = [];
    var reponses = [];
    
    // Boucles pour remplir les listes avec les bons elements
    for (var i=1 ; i<=nbr_questions ; i=i+1) {
        fieldset.push(document.getElementById("fieldset"+i.toString()));
    }
    
    for (var i=1 ; i<=nbr_questions ; i=i+1) {
        reponses.push(document.getElementsByName("rep"+i.toString()));
    }
    
    // Boucle pour vérifier si tout est bien coché 
    for (var i=0 ; i<(reponses.length) ; i=i+1) {
        if ( !((reponses[i][0].checked) || (reponses[i][1].checked) || (reponses[i][2].checked) || (reponses[i][3].checked)) ) {
            tout_cocher = false;
        }
    }
    
    // Si le joueur a bien tout coché :
    if (tout_cocher) {
        // Boucle pour vérifier les réponses du joueur
        for (var i=0 ; i<nbr_questions ; i=i+1) {
            if (reponses[i][(soluce[i]-1)].checked) {
                score = score+1;
                fieldset[i].style.backgroundColor = '#00FF00';
            }
            else {
                fieldset[i].style.backgroundColor = '#FF0000';
            }
        }

        // Affichage du score 
        alert("Ton score est : " + score + " point(s)");
    }
    // Si tout n'est pas coché :
    else {
        // Affichage de l'erreur 
        alert("Tu n'a pas tout coché ! ")
    }
}
