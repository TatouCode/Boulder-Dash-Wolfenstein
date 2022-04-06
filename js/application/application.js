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
    //console.log(app.vue.joueur.y+";"+app.vue.joueur.x);
    document.getElementById(app.vue.joueur.y+";"+app.vue.joueur.x).style.content = 'url("../../sprite/blazkowiczFace.png")';
    
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
                //app.vue.updateMap();
                //console.log(position);
                
                //app.vue.updateBlock(positionX, positionY);
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionY = parseInt(positionY)+1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
                //app.vue.updateMap();
            }
        }
        break;
      case "z":
      case "ArrowUp":
        if(parseInt(positionY)-1 >= 0){
            if(checkElement(positionX, parseInt(positionY)-1))
            {
                //app.vue.updateMap();
                
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionY = parseInt(positionY)-1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
                //app.vue.updateMap();
            }
        }
        break;
      case "q":
      case "ArrowLeft":
        if(parseInt(positionX)-1 >= 0){
            if(checkElement(parseInt(positionX)-1, positionY))
            {
                //app.vue.updateMap();
                
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionX = parseInt(positionX)-1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
                //app.vue.updateMap();
            }
        }
        break;
      case "d":
      case "ArrowRight":
        if(parseInt(positionX)+1 < 32){
            if(checkElement(parseInt(positionX)+1, positionY))
            {
                //app.vue.updateMap();
                
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                //console.log(position);
                positionX = parseInt(positionX)+1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                //console.log(position);
                document.getElementById(position).style.content = 'url("../sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
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

    function comportementEnnemi(positionJoueurX, positionJoueurY)
    {
        let map = app.vue.map1;
        //console.log(app.vue.positionEnnemi);
        app.vue.positionEnnemi.forEach(function(ennemi) {
            let ennemiY = ennemi.substring(0, 1);
            let ennemiX = ennemi.substring(2, 3);
            //Premier saut
            //console.log(positionJoueurY);
            //console.log("Map : "+map[parseInt(ennemiY)+1][ennemiX]);
            //console.log("Map : "+map[parseInt(ennemiY)+1][ennemiX] == "V");
            //console.log("EnnemiY+1 : "+(parseInt(ennemiY)+1));
            //console.log("JoueurY : "+positionJoueurY);
            //console.log(parseInt(ennemiY)+1 != positionJoueurY);
            //console.log(ennemi);
            //console.log("ennemiY :"+(parseInt(ennemiY)+1));
            //console.log("positionJoueurY : "+positionJoueurY);
            //Si la casse du dessous est vide
            //if(parseInt(ennemiY)+1 < 15){
            //console.log(parseInt(ennemiY)+1);
            if((map[parseInt(ennemiY)+1][ennemiX] == "V")){//&&((ennemiY != positionJoueurY)&&(positionJoueurX != ennemiX))){//&&(positionJoueurX != ennemiX)){
                if((ennemiY != positionJoueurY)&&(positionJoueurX != ennemiX)){
                    map[ennemiY][ennemiX] = "V";
                    ennemiY = parseInt(ennemiY)+1;
                    //Si la chute continue
                    console.log((parseInt(ennemiY)+1));
                    //if(parseInt(ennemiY)+1 < 15){
                    while(map[parseInt(ennemiY)+1][ennemiX] == "V"){
                        //ennemiY = parseInt(ennemiY)+1;
                        if((ennemiY == positionJoueurY)&&(positionJoueurX == ennemiX)){
                            //Partie terminé
                            //document.getElementById("niveauTermine").hidden = false;
                            window.location.replace("../niveaux.html");
                        }
                        //else{
                            //ennemiY = parseInt(ennemiY)+1;
                            //console.log(ennemiY);
                            //map[ennemiY][ennemiX] = "V";
                        //}
                        ennemiY = parseInt(ennemiY)+1;
                    }
                    //}
                }
                else{
                    while(map[parseInt(ennemiY)+1][ennemiX] == "V"){
                        map[ennemiY][ennemiX] = "V";
                        ennemiY = parseInt(ennemiY)+1;
                    }
                    map[ennemiY][ennemiX] = "V";
                    ennemiY = parseInt(ennemiY)+1;
                    window.location.replace("../niveaux.html");
                }
                //Si la chute continue
                /*while(map[parseInt(ennemiY)+1][ennemiX] == "V"){
                    //console.log(map[parseInt(ennemiY)+1][ennemiX]);
                    //console.log(parseInt(ennemiY)+1);
                    //console.log(positionJoueurY);
                    ennemiY = parseInt(ennemiY)+1;
                    if((ennemiY == parseInt(positionJoueurY)+1)&&(parseInt(positionJoueurX)+1 == ennemiX)){
                        //Partie terminé
                        //document.getElementById("niveauTermine").hidden = false;
                        window.location.replace("../niveaux.html");
                    }
                    else{
                        //ennemiY = parseInt(ennemiY)+1;
                        //console.log(ennemiY);
                        //map[ennemiY][ennemiX] = "V";
                    }
                }*/
                map[ennemiY][ennemiX] = "E";
                //app.vue.map1 = map;
                //app.vue.updateMap();
            }
            //}
        });
        app.vue.map1 = map;
        app.vue.updateMap(map);
        //console.log(map);
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








