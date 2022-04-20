import { Controleur } from "../controleur/controleur.js";
import { VueNiveau } from "../vues/vueNiveau.js";
import { Hero } from "../modeles/hero.js";
import { Coordonnee } from "../modeles/coordonnee.js";

class  Appli{

    #controleur;

    #vue;

    constructor(){
        this.#controleur = new Controleur();
        this.#vue = new VueNiveau(this.#controleur);
    }

    get controleur() { return this.#controleur; }
    get vue() { return this.#vue; }
}


window.addEventListener("load", () => {
    const app = new Appli();

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; // Ne devrait rien faire si l'événement de la touche était déjà consommé.
        }
      
        /**
         * Switch qui permet de gérer les déplacements
         */
        let coordJoueur = app.controleur.niveau.joueur.coordonnee;
        let newCoord;
        switch (event.key) {
          case "s":
          case "ArrowDown":
                //x+0 y+1
                newCoord = new Coordonnee(coordJoueur.x + 1, coordJoueur.y);
            break;
          case "z":
          case "ArrowUp":
                //x+0 y-1
                newCoord = new Coordonnee(coordJoueur.x - 1, coordJoueur.y);
            break;
          case "q":
          case "ArrowLeft":
                //x-1 y+0
                newCoord = new Coordonnee(coordJoueur.x, coordJoueur.y - 1);
            break;
          case "d":
          case "ArrowRight":
                //x+1 y+0
                newCoord = new Coordonnee(coordJoueur.x, coordJoueur.y + 1);
            break;
          default:
            return; // Quitter lorsque cela ne gère pas l'événement touche.
        }
      
        // Annuler l'action par défaut pour éviter qu'elle ne soit traitée deux fois.
        event.preventDefault();
        if(app.controleur.niveau.joueur.deplacementPossible(newCoord)){
            app.controleur.niveau.updateJoueur(newCoord);
            app.controleur.notifier();
        }

      }, true);

});

