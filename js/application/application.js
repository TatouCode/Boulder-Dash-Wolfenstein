import { VueJeu } from "../vues/vueJeu.js";



class Application
{
    #vue;
    #score;

    #listeNiveaux = new Map();

    constructor()
    {
        this.#vue = new VueJeu();
        this.#listeNiveaux = this.#vue.listeNiveaux;
        if(localStorage.getItem('Scorediamant') == null){
            this.#score = 0;
        }
        else{
            this.#score = parseInt(localStorage.getItem('Scorediamant'));
        }
    }

    get vue() { return this.#vue; }
    get listeNiveaux() { return this.#listeNiveaux; }
    get score() { return this.#score; }
    set score(value) { this.#score = value; }
}


window.addEventListener("load", () => {
    const app = new Application();
    document.getElementById(app.vue.joueur.y+";"+app.vue.joueur.x).style.content = 'url(".././sprite/blazkowiczFace.png")';
    
    let position = app.vue.joueur.y+";"+app.vue.joueur.x
    let positionY = app.vue.joueur.y
    let positionX = app.vue.joueur.x
    window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
      return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
    }
  
    /**
     * Switch qui permet de gérer les déplacements
     */
    switch (event.key) {
      case "s":
      case "ArrowDown":
        if(parseInt(positionY)+1 < 16){
            if(checkElement(positionX, parseInt(positionY)+1))
            {
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                positionY = parseInt(positionY)+1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                document.getElementById(position).style.content = 'url("./sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
            }
        }
        break;
      case "z":
      case "ArrowUp":
        if(parseInt(positionY)-1 >= 0){
            if(checkElement(positionX, parseInt(positionY)-1))
            {
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                positionY = parseInt(positionY)-1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                document.getElementById(position).style.content = 'url("./sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
            }
        }
        break;
      case "q":
      case "ArrowLeft":
        if(parseInt(positionX)-1 >= 0){
            if(checkElement(parseInt(positionX)-1, positionY))
            {
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                positionX = parseInt(positionX)-1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                document.getElementById(position).style.content = 'url("./sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
            }
        }
        break;
      case "d":
      case "ArrowRight":
        if(parseInt(positionX)+1 < 32){
            if(checkElement(parseInt(positionX)+1, positionY))
            {
                document.getElementById(position).style.backgroundImage = "";
                document.getElementById(position).style.content = "";
                positionX = parseInt(positionX)+1;
                position = positionY+";"+positionX;
                app.vue.joueur.x = positionX;
                app.vue.joueur.y = positionY;
                comportementEnnemi(positionX, positionY);
                document.getElementById(position).style.content = 'url("./sprite/blazkowiczFace.png")';
                document.getElementById(position).style.backgroundImage = "";
                updateScore(positionX, positionY);
            }
        }
        break;
      default:
        return; // Quitter lorsque cela ne gère pas l'événement touche.
    }
  
    // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
    event.preventDefault();
  }, true);

  /**
   * Fonction qui regarde si la joueur peut accèder à la 
   * @param {*} positionX position x du joueur
   * @param {*} positionY position y du joueur
   * @returns retourne un boolean, true si le joueur peut accèder à la case false sinon
   */
  function checkElement(positionX, positionY) {
    let typeCase = app.vue.map1[positionY][positionX];
    let ok = true;
    if(typeCase == 'E' || typeCase == 'M'){
        ok = false;
    }
    return ok;
    }

    /**
     * Met à jour je joueur du score
     * @param {*} positionX position x du joueur
     * @param {*} positionY position y du joueur
     */
    function updateScore(positionX, positionY)
    {
        let typeCase = app.vue.map1[positionY][positionX];
        if(typeCase == "D"){
            app.score += 1;
            document.getElementById("Score").innerHTML = "Score : "+app.score;
            console.log("app : "+app.score);
            console.log(app.vue.compteDiamant);
            if(app.vue.compteDiamant == app.score)
            {
                document.getElementById("niveauTermine").hidden = false;
            }
        }
        let map = app.vue.map1;
        map[positionY][positionX] = "V";
        app.vue.map1 = map;
    }

    /**
     * Gère le comportement des ennemies dans le jeu
     * @param {*} positionJoueurX position x du joueur
     * @param {*} positionJoueurY position y du joueur
     */
    function comportementEnnemi(positionJoueurX, positionJoueurY)
    {
        let map = app.vue.map1;
        app.vue.positionEnnemi.forEach(function(ennemi) {
            let ennemiY = ennemi.substring(0, 1);
            let ennemiX = ennemi.substring(2, 3);
            if((map[parseInt(ennemiY)+1][ennemiX] == "V")){
                if((ennemiY != positionJoueurY)&&(positionJoueurX != ennemiX)){
                    map[ennemiY][ennemiX] = "V";
                    ennemiY = parseInt(ennemiY)+1;
                    //Si la chute continue
                    console.log((parseInt(ennemiY)+1));
                    while(map[parseInt(ennemiY)+1][ennemiX] == "V"){
                        if((ennemiY == positionJoueurY)&&(positionJoueurX == ennemiX)){
                            //Partie terminé
                            window.location.replace("../niveaux.html");
                        }
                        ennemiY = parseInt(ennemiY)+1;
                    }
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
                map[ennemiY][ennemiX] = "E";

            }
        });
        app.vue.map1 = map;
        app.vue.updateMap(map);
    }

    /**
     * Renvoie au menu et sauvegarde dans le local storage
     */
    document.getElementById("buttonMenu").addEventListener('click', function(){

        localStorage.setItem('niveau', JSON.stringify(app.vue.map1));
        localStorage.setItem('Scorediamant', app.score);
        localStorage.setItem('Comptediamant', app.vue.compteDiamant);
        localStorage.setItem('positionEnnemi', app.vue.positionEnnemi);
        localStorage.setItem('joueurX', app.vue.joueur.x);
        localStorage.setItem('joueurY', app.vue.joueur.y);
        window.location.replace("../index.html");
    });

})








