import { Ennemi } from "../modeles/ennemi.js";
import { Hero } from "../modeles/hero.js";
import { Mur } from "./mur.js";
import { Cle } from "../modeles/cle.js";
import { Terre } from "../modeles/terre.js";
import { Vide } from "../modeles/vide.js";
import { Coordonnee } from "../modeles/coordonnee.js";

export class Niveau{

    #mapActuelle;

    #joueur;

    #listeEnnemi;

    #nbCle = 0;

    #niveau1 = [
        ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","M","M","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","M","M","M","M","M","M","M","M"],
        ["M","T","T","T","T","T","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","T","T","T","E","T","E","M"],
        ["M","T","T","T","T","T","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","M","M","M","T","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","M","D","M","M","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","M","E","M","M","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","T","T","M","M","T","T","M"],
        ["M","M","M","M","M","M","T","T","T","E","E","E","E","E","E","E","E","T","T","T","T","T","T","M","T","M","T","M","M","E","T","M"],
        ["M","E","T","D","D","M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","M","T","M","M","T","T","M"],
        ["M","T","T","D","D","M","T","T","T","T","T","T","M","M","M","M","M","M","M","M","M","M","M","M","T","M","T","M","M","T","T","M"],
        ["M","E","M","M","M","M","M","M","M","M","M","M","M","E","E","E","E","E","E","E","E","E","M","T","T","M","T","M","D","T","T","M"],
        ["M","T","T","T","T","T","T","T","T","T","T","T","D","T","T","T","T","T","T","T","T","T","T","T","M","M","E","M","M","M","M","M"],
        ["M","V","T","T","T","T","T","T","T","T","T","T","M","M","M","M","M","M","M","M","M","M","M","M","M","D","T","T","T","T","T","M"],
        ["M","V","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","D","M","M","M","M","T","T","J","M"],
        ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]
        ];

    //#listePersonnage;

    constructor(map){
        //this.#map = map;
        this.#mapActuelle  = Array.from(Array(16), () => new Array(32));
        this.#listeEnnemi = [];
        //initialiseMap(this.#niveau1);
        //this.nouvellePartie();
    }

    nouvellePartie(){
        this.initialiseMap(this.#niveau1);
    }

    initialiseMap(niveau){
        for (var i = 0; i < 16; i++){
            for (var j = 0; j < 32; j++){
                let coordonnee = new Coordonnee(i, j);
                let url = "";
                switch (niveau[i][j]) {
                    case "E":
                        url = ".././sprite/ennemiShoot.png";
                        let ennemi = new Ennemi(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = ennemi;
                        this.#listeEnnemi.push(ennemi);
                        break;
                    case "D":
                        url = ".././sprite/cle.png";
                        let cle = new Cle(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = cle;
                        this.#nbCle += 1;
                        break;
                    case "T":
                        url = ".././sprite/terre.png";
                        let terre = new Terre(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = terre;
                        break;
                        case "V":
                        url = "";
                        let vide = new Vide(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = vide;
                        break;
                    case "M":
                        let nb = Math.floor(Math.random() * (2 - 0) + 0);
                        if(nb == 0){
                            url = ".././sprite/mur1.png";
                        }
                        else if(nb == 1){
                            url = ".././sprite/mur2.png";
                        }
                        /*else if(nb == 2){
                            url = "../../../sprite/mur4.png";
                        }*/
                        /*else if(nb == 3){
                            url = "../../../sprite/mur4.png";
                        }*/
                        let mur = new Mur(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = mur;
                        break;
                    case "J":
                        url = ".././sprite/blazkowicz.png";
                        let joueur = new Hero(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = joueur;
                        this.#joueur = joueur;
                };
            }
        }
        //console.log(this.#mapActuelle);
    }

    updateJoueur(newCoordonnee){
        let videCoord = new Coordonnee(this.#joueur.coordonnee.x, this.#joueur.coordonnee.y);
        let vide = new Vide(videCoord, "V", "", this);
        let direction = "normal";
        let coord;
        if(newCoordonnee.y - this.#joueur.coordonnee.y > 0){
            coord = new Coordonnee(this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].coordonnee.x, this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].coordonnee.y + 1);
            direction = "droite";
        }
        else if(newCoordonnee.y - this.#joueur.coordonnee.y < 0){
            coord = new Coordonnee(this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].coordonnee.x, this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].coordonnee.y - 1);
            direction = "gauche";
        }
        //Gère le cas du déplacement de l'ennemi horizontalement
        if(this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].type == "E"){
            //let ennemi = new Ennemi(coord, "E", "../.././sprite/enemiShoot.png", this);
            this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].coordonnee = coord;
            if(this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].deplacementPossible(coord)){
                this.#mapActuelle[coord.x][coord.y] = this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y];//ennemi;
                //this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].coordonnee = coord;
            }
        }
        console.log(direction);
        if(direction == "gauche"){
            this.#joueur.urlSprite = ".././sprite/blazkowiczGauche.png";
        }
        else if(direction == "droite"){
            this.#joueur.urlSprite = ".././sprite/blazkowiczDroite.png";
        }
        else{
            this.#joueur.urlSprite = ".././sprite/blazkowicz.png";
        }
        this.#mapActuelle[this.#joueur.coordonnee.x][this.#joueur.coordonnee.y] = vide;
        this.#joueur.coordonnee = newCoordonnee;
        if(this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].type == "D"){
            this.#nbCle -= 1;
            if(this.#nbCle == 0){
                document.getElementById("niveauTermine").hidden = false;
            }
        }
        this.#mapActuelle[newCoordonnee.x][newCoordonnee.y] = this.#joueur;
        this.#listeEnnemi.forEach(ennemi => {
            ennemi.comportement();
            if(!this.#joueur.enVie){
                document.getElementById("mort").hidden = false;
            }
        });

        //console.log(this.#mapActuelle);

    }
    /*updateMapActuelle(){
        this.#mapActuelle[this.#joueur.coordonnee.x][this.#joueur.coordonnee.y] = this.#joueur;
    }*/

    get mapActuelle() { return this.#mapActuelle; }
    get joueur() { return this.#joueur; }
    get nbCle() { return this.#nbCle; }

    set joueur(joueur) { this.#joueur = joueur;}


}