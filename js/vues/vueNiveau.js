import { Observateur } from "../patterns/observateur.js";
//import { Controleur } from "../controleur/controleur.js";

export class VueNiveau extends Observateur{

    #controleur;

    constructor(controleur) {
        super();
        this.#controleur = controleur;
        this.#controleur.ajouteObserbateur(this);

        if(localStorage.getItem('chargeNiveau') != null && localStorage.getItem('sauvegarde') != null){
            console.log(JSON.parse(localStorage.getItem('sauvegarde')));
            this.#controleur.chargeNiveau(JSON.parse(localStorage.getItem('sauvegarde')));
            //console.log(localStorage.getItem('sauvegarde'));
            localStorage.removeItem('chargeNiveau');
        }
        else{
            this.#controleur.nouvellePartie();
        }
        
        this.update();

        
    }


    update(){
        this.afficheGrille();
        this.updateScore();
        //console.log(this.#controleur.niveau.mapActuelle);
        //console.log(JSON.parse(localStorage.getItem('sauvegarde')));
        //console.log("je suis la");
        //localStorage.clear();
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
                    //div.style.background = 'no-repeat center center';
                    //div.style.backgroundSize = "100% 100%";
                    div.style.objectFit = "contain";
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                }
                else{
                    div.style.backgroundImage = "";
                    div.style.content = "";
                }

                if(this.#controleur.niveau.mapActuelle[i][j].type == "E" || this.#controleur.niveau.mapActuelle[i][j].type == "J" || this.#controleur.niveau.mapActuelle[i][j].type == "D"){
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    //div.style.backgroundSize = "60%";
                    div.style.backgroundSize = "100% 100%";
                    //div.style.objectFit = "contain";
                }
                else{
                    div.style.backgroundRepeat = "no-repeat";
                    div.style.backgroundPosition = "center";
                    div.style.backgroundSize = "150%";
                    //div.style.objectFit = "contain";
                }
                document.getElementById('grille').appendChild(div);
                

            }
        }
    }

    updateScore(){
        document.getElementById("score").innerHTML = "Cle a recuperer : "+this.#controleur.niveau.nbCle;
    }

    get controleur() { return this.#controleur; }

}