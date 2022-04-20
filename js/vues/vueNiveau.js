import { Observateur } from "../patterns/observateur.js";
//import { Controleur } from "../controleur/controleur.js";

export class VueNiveau extends Observateur{

    #controleur;

    constructor(controleur) {
        super();
        this.#controleur = controleur;
        this.#controleur.ajouteObserbateur(this);

        this.#controleur.nouvellePartie();

        this.update();

        
    }


    update(){
        this.afficheGrille();
        this.updateScore();
    }

    afficheGrille(){
        const myNode = document.getElementById("grille");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        //console.log(this.#controleur.niveau.mapActuelle);
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 32; j++) {
                let div = document.createElement("div");
                div.classList.add("case");
                //console.log(this.#controleur.niveau.mapActuelle[i][j].urlSprite);
                if(this.#controleur.niveau.mapActuelle[i][j].type != "V"){
                    div.style.backgroundImage = 'url("'+this.#controleur.niveau.mapActuelle[i][j].urlSprite+'")';
                }
                else{
                    div.style.backgroundImage = "";
                    div.style.content = "";
                }
                
                div.style.backgroundRepeat = "no-repeat";
                div.style.backgroundPosition = "center";
                div.style.backgroundSize = "100%";
                document.getElementById('grille').appendChild(div);
            }
        }
    }

    updateScore(){
        document.getElementById("Score").innerHTML = "Score : "+this.#controleur.niveau.nbCle;
    }

    get controleur() { return this.#controleur; }

}