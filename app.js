let scores, roundScore, activePlayer , gamePlaying;

init();

//crée l'evenement click du bouton Roll Dice
document.querySelector(".btn-roll").addEventListener("click", function(){
    
    if(gamePlaying){
        //1. besoin de random number
        let dice = Math.floor(Math.random() * 6) + 1;
        //2.jouer le resultat
        let diceDom = document.querySelector(".dice");
        diceDom.style.display = "block";
        diceDom.src = "dice-" + dice + ".png";
        //3. enregistrer dans le round score si le reultant et differnet de 1
        if(dice !== 1){
            //ajouter le resultat partiel
            roundScore = dice ;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
            //ajout du resulat partiel au resultat global
            scores[activePlayer] += roundScore;
            //mettre a jour le UI
            document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
            //verifions si le joueur gagne
            if(scores[activePlayer] >= 500) {
                document.querySelector("#name-" + activePlayer).textContent = "Gagnant !";
                document.querySelector(".dice").style.display = "none";
                document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
                document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
                gamePlaying = false;
            }
        }else {
            
            nextPlayer();
        }
    }  
});

function nextPlayer(){
    //joueur suivant
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    //initialise le resultats par 0
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    //animation de page de jeu au joueur actif
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";
}

document.querySelector(".btn-new").addEventListener("click", init);

function init(){

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    
    //modifier le css d'un elment HTML
    document.querySelector(".dice").style.display = "none";

    //remplacer le contenu d'un element HTML
    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.getElementById("name-0").textContent = "player 1";
    document.getElementById("name-1").textContent = "player 2";
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}
























//replacer le contenu d'un element HTML
/*document.querySelector("#current-" + activePlayer).textContent = dice;
document.querySelector("#current-" + activePlayer).innerHTML = " <em> " + dice + " <em> ";
//lire le contenu de l'element HTML
var x = document.querySelector("#score-1").textContent;*/