import { Case } from "../modeles/case.js";


export class VueJeu {

    #map1 = [
        ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","E","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","E","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M"],
        ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]
        ];

    #listeNiveaux = new Map();

    #compteDiamant;

    #positionEnnemi;

    #joueur;

    //#controleur;


    constructor(){
        //this.#controleur = controleur;
        if(localStorage.getItem('niveau') == null){
            this.#compteDiamant = 0;
            this.#positionEnnemi = [];
            this.#joueur = new Case("3", "3", "J");
            this.initialize();
            this.#listeNiveaux.set(this.#map1, "Niveau 1");
        }
        else{
            this.#map1 = JSON.parse(localStorage.getItem('niveau'));
            //this.#map1 = localStorage.getItem('niveau');
            this.#compteDiamant = localStorage.getItem('Comptediamant');
            this.#positionEnnemi = [];
            this.#positionEnnemi.push(localStorage.getItem('positionEnnemi'));
            this.#joueur = new Case();
            this.#joueur.x = localStorage.getItem('joueurX');
            this.#joueur.y = localStorage.getItem('joueurY');
            //console.log(this.#joueur.x);
            this.initialize();
            this.#listeNiveaux.set(this.#map1, "Niveau 1");
        }


    }

    get map1() { return this.#map1; }
    set map1(map) { this.#map1 = map; }
    get listeNiveaux() { return this.#listeNiveaux; }
    get compteDiamant() { return this.#compteDiamant; }
    get positionEnnemi() { return this.#positionEnnemi; }
    set positionEnnemi(positionEnnemi) { this.#positionEnnemi = positionEnnemi; }


    get joueur() { return this.#joueur; }
    set joueur(joueur) { this.#joueur = joueur; }

    initialize() {
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 32; j++) {
                let div = document.createElement("div");
                div.classList.add("case");
                div.id = i+";"+j;
                let type = this.#map1[i][j];
                if(type == "D"){
                    this.#compteDiamant += 1;
                }
                if(type == "E"){
                    this.#positionEnnemi.push(i+";"+j);
                }
                if(type == "J"){
                    this.#joueur = new Case(j, i, "J");
                    console.log(i+";"+j);
                }
                div.style.backgroundImage = 'url("'+this.getUrl(type)+'")';
                div.style.backgroundRepeat = "no-repeat";
                div.style.backgroundPosition = "center";
                div.style.backgroundSize = "100%";
                document.getElementById('grille').appendChild(div);
            }
        }
        //console.log(this.#positionEnnemi);
    }

    getUrl(type) {
        let url = "";
        switch (type) {
            case "E":
                url = "../../sprite/enemiShoot.png";
                break;
            case "D":
                url = "../../sprite/cle.png";
                break;
            case "T":
                url = "../../sprite/terre.png";
                break;
            /*case "V":
                url = "../../sprite/vide.png";
                break;*/
            case "M":
                url = "../../sprite/mur2.png";
                break;
            case "J":
                url = "../../sprite/blazkowiczFace.png";
        }
        return url;
    }

    updateMap()
    {
        //console.log(this.#map1);
        //this.#map1 = map;
        this.#positionEnnemi = [];
        const myNode = document.getElementById("grille");
        while (myNode.firstChild) {
            myNode.removeChild(myNode.lastChild);
        }

        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 32; j++) {
                let div = document.createElement("div");
                div.classList.add("case");
                div.id = i+";"+j;
                let type = this.#map1[i][j];
                if(type == "D"){
                    this.#compteDiamant += 1;
                }
                if(type == "E"){
                    this.#positionEnnemi.push(i+";"+j);
                }
                if(type == "J"){
                    this.#joueur = new Case(j, i, "J");
                }
                div.style.backgroundImage = 'url("'+this.getUrl(type)+'")';
                div.style.backgroundRepeat = "no-repeat";
                div.style.backgroundPosition = "center";
                div.style.backgroundSize = "100%";
                document.getElementById('grille').appendChild(div);
            }
        } 
    }
}