import { VueJeu } from "../vues/vueJeu.js";
import { Controleur } from "../controleurs/Controleur.js";

class Application
{
    //#controleur;
    #vue;
    #score;

    #listeNiveaux = new Map();

    constructor()
    {
        //this.#controleur = new Controleur();
        this.#vue = new VueJeu();
        this.#listeNiveaux = this.#vue.listeNiveaux;
        if(localStorage.getItem('Scorediamant') == null){
            this.#score = 0;
        }
        else{
            this.#score = parseInt(localStorage.getItem('Scorediamant'));
            //updateScore(this.#vue.joueur.x, this.#vue.joueur.y);
        }
        //this.#vue.compteDiamant;
    }

    get vue() { return this.#vue; }
    get listeNiveaux() { return this.#listeNiveaux; }
    get score() { return this.#score; }
    set score(value) { this.#score = value; }
}


window.addEventListener("load", () => {
    const app = new Application();
    //document.getElementById("3;3").style.content = 'url("../../sprite/stickman.png")';
    //console.log(app.vue.positionJoueur);
    document.getElementById(app.vue.joueur.y+";"+app.vue.joueur.x).style.content = 'url("../../sprite/stickman.png")';
    
    let position = app.vue.joueur.y+";"+app.vue.joueur.x//app.vue.positionJoueur;//document.getElementById("3;3").id;
    let positionY = app.vue.joueur.y//position.substring(0, 1);
    let positionX = app.vue.joueur.x//position.substring(2, 3);
    window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }
  
    switch (event.key) {
      case "s":
      case "ArrowDown":
        if(parseInt(positionY)+1 < 16){
            if(checkElement(positionX, parseInt(positionY)+1))
            {
                //console.log(position);
                comportementEnnemi(positionY);
                //app.vue.updateBlock(positionX, positionY);
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionY = parseInt(positionY)+1;
                position = positionY+";"+positionX;
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/stickman.png")';
                updateScore(positionX, positionY);
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                //app.vue.updateMap();
            }
        }
        break;
      case "z":
      case "ArrowUp":
        if(parseInt(positionY)-1 >= 0){
            if(checkElement(positionX, parseInt(positionY)-1))
            {
                comportementEnnemi(positionY);
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionY = parseInt(positionY)-1;
                position = positionY+";"+positionX;
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/stickman.png")';
                updateScore(positionX, positionY);
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                //app.vue.updateMap();
            }
        }
        break;
      case "q":
      case "ArrowLeft":
        if(parseInt(positionX)-1 >= 0){
            if(checkElement(parseInt(positionX)-1, positionY))
            {
                comportementEnnemi(positionY);
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionX = parseInt(positionX)-1;
                position = positionY+";"+positionX;
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/stickman.png")';
                updateScore(positionX, positionY);
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                //app.vue.updateMap();
            }
        }
        break;
      case "d":
      case "ArrowRight":
        if(parseInt(positionX)+1 < 32){
            if(checkElement(parseInt(positionX)+1, positionY))
            {
                comportementEnnemi(positionY);
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionX = parseInt(positionX)+1;
                position = positionY+";"+positionX;
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/stickman.png")';
                updateScore(positionX, positionY);
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                //app.vue.updateMap();
            }
        }
        break;
      case "Enter":
        // Faire quelque chose pour les touches "enter" ou "return" pressées.
        break;
      case "Escape":
        // Faire quelque chose pour la touche "esc" pressée.
        break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
    }
  
    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
  }, true);

  function checkElement(positionX, positionY) {
    //let positionX = getCoordX(cordoonnee);
    //let positionY = getCoordY(cordoonnee);
    //console.log(app.vue.map1);
    let typeCase = app.vue.map1[positionY][positionX];
    let ok = true;
    //console.log(positionY +";"+ positionX);
    //console.log(typeCase);
    if(typeCase == 'E' || typeCase == 'M'){
        ok = false;
    }
    return ok;
    }

    function updateScore(positionX, positionY)
    {
        let typeCase = app.vue.map1[positionY][positionX];
        if(typeCase == "D"){
            app.score += 1;
            document.getElementById("Score").innerHTML = "Score : "+app.score;
            if(app.vue.compteDiamant == app.score)
            {
                document.getElementById("niveauTermine").hidden = false;
            }
        }
        let map = app.vue.map1;
        map[positionY][positionX] = "V";
        app.vue.map1 = map;
        //console.log(app.score);
        //console.log(app.listeNiveaux.get(app.map1));
    }

    function comportementEnnemi(positionJoueurY)
    {
        let map = app.vue.map1;
        //console.log(app.vue.positionEnnemi);
        app.vue.positionEnnemi.forEach(function(ennemi) {
            let ennemiY = ennemi.substring(0, 1);
            let ennemiX = ennemi.substring(2, 3);
            //Premier saut
            console.log("Map : "+map[parseInt(ennemiY)+1][ennemiX] == "V");
            console.log("Map : "+map[parseInt(ennemiY)+1][ennemiX]);
            console.log("ennemiY :"+(parseInt(ennemiY)+1));
            console.log("positionJoueurY : "+positionJoueurY);
            if((map[parseInt(ennemiY)+1][ennemiX] == "V")&&(parseInt(ennemiY)+1 != positionJoueurY)){
                map[ennemiY][ennemiX] = "V";
                ennemiY = parseInt(ennemiY)+1;
                //Si la chute continue
                while(map[parseInt(ennemiY)+1][ennemiX] == "V"){
                    console.log(map[parseInt(ennemiY)+1][ennemiX]);
                    console.log(parseInt(ennemiY)+1);
                    console.log(positionJoueurY);
                    if(parseInt(ennemiY)+1 == positionJoueurY){
                        //Partie terminé
                        //document.getElementById("niveauTermine").hidden = false;
                        window.location.replace("../niveaux.html");
                    }
                    else{
                        ennemiY = parseInt(ennemiY)+1;
                        //console.log(ennemiY);
                        //map[ennemiY][ennemiX] = "V";
                    }
                }
                map[ennemiY][ennemiX] = "E";
                //app.vue.map1 = map;
            }
        });
        app.vue.map1 = map;
        app.vue.updateMap();
        //console.log();
    }

    document.getElementById("buttonMenu").addEventListener('click', function(){

        localStorage.setItem('niveau', JSON.stringify(app.vue.map1));
        localStorage.setItem('Scorediamant', app.score);
        localStorage.setItem('Comptediamant', app.vue.compteDiamant);
        localStorage.setItem('positionEnnemi', app.vue.positionEnnemi);
        localStorage.setItem('joueurX', app.vue.joueur.x);
        localStorage.setItem('joueurY', app.vue.joueur.y);

        //localStorage.setItem('liste', app.vue.positionEnnemi);
    
    
        window.location.replace("../index.html");
    });

})








