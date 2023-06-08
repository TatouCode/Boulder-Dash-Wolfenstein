import { Ennemi } from "../modeles/ennemi.js";
import { EnnemiLourd } from "../modeles/ennemiLourd.js";
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

        #niveau2 = [
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","M","M","T","T","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","D","M","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","L","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","E","T","E","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","D","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","L","T","L","T","E","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","E","T","T","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","D","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","T","M"],
            ["M","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","T","M","T","T","T","M","J","M"],
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]
            ];

        #niveau3 = [
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","T","T","T","T","T","T","T","T","T","T","T","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","M","M","M","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","T","T","T","E","T","E","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","M","M","T","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","M","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","E","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","T","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","T","M","M","E","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","M","M","M","M","M","M","T","M","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","E","E","E","E","M","T","T","M","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","T","M","M","E","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","M","M","M","M","M","M","M","M","D","T","T","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","M","M","M","M","T","T","J","M"],
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]
            ];
    
    #mapNiveaux = Array();
    #mapSauvegarde = Array();

    constructor(){
        this.#mapActuelle  = Array.from(Array(16), () => new Array(32));
        this.#listeEnnemi = [];
        this.#mapNiveaux.push(this.#niveau1);
        this.#mapNiveaux.push(this.#niveau2);
        this.#mapNiveaux.push(this.#niveau3);
    }

    nouvellePartie(){
        this.initialiseMap(this.#mapNiveaux[0]);
        this.#mapSauvegarde = this.#mapNiveaux[0];
    }

    niveauSuivant(numeroNiveau){
        this.initialiseMap(this.#mapNiveaux[numeroNiveau]);
        this.#mapSauvegarde = this.#mapNiveaux[numeroNiveau];
    }

    initialiseMap(niveau){
        for (var i = 0; i < 16; i++){
            for (var j = 0; j < 32; j++){
                let coordonnee = new Coordonnee(i, j);
                let url = "";
                switch (niveau[i][j]) {
                    case "E":
                        url = "./sprite/ennemiShoot.png";
                        let ennemi = new Ennemi(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = ennemi;
                        this.#listeEnnemi.push(ennemi);
                        break;
                    case "L":
                        url = "./sprite/Hans.png";
                        let lourd = new EnnemiLourd(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = lourd;
                        this.#listeEnnemi.push(lourd);
                        break;
                    case "D":
                        url = "./sprite/cle.png";
                        let cle = new Cle(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = cle;
                        this.#nbCle += 1;
                        break;
                    case "T":
                        url = "./sprite/terre.png";
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
                            url = "./sprite/mur1.png";
                        }
                        else if(nb == 1){
                            url = "./sprite/mur2.png";
                        }
                        let mur = new Mur(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = mur;
                        break;
                    case "J":
                        url = "./sprite/blazkowicz.png";
                        let joueur = new Hero(coordonnee, niveau[i][j], url, this);
                        this.#mapActuelle[i][j] = joueur;
                        this.#joueur = joueur;
                };
            }
        }
        localStorage.setItem('sauvegarde', JSON.stringify(this.#mapActuelle));
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
        if(this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].type == "E" || this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].type == "L"){
            this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].coordonnee = coord;
            if(this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y].deplacementPossible(coord)){
                this.#mapActuelle[coord.x][coord.y] = this.#mapActuelle[this.#joueur.coordonnee.x][newCoordonnee.y];//ennemi;
            }
        }
        if(direction == "gauche"){
            this.#joueur.urlSprite = "./sprite/blazkowiczGauche.png";
        }
        else if(direction == "droite"){
            this.#joueur.urlSprite = "./sprite/blazkowiczDroite.png";
        }
        else{
            this.#joueur.urlSprite = "./sprite/blazkowicz.png";
        }
        this.#mapActuelle[this.#joueur.coordonnee.x][this.#joueur.coordonnee.y] = vide;
        this.#joueur.coordonnee = newCoordonnee;
        if(this.#mapActuelle[newCoordonnee.x][newCoordonnee.y].type == "D"){
            this.#nbCle -= 1;
            if(this.#nbCle == 0){
                if(parseInt(localStorage.getItem('niveau'))+1 > 2){
                    document.getElementById("divFinJeu").hidden = false;
                }
                else{
                    document.getElementById("niveauTermine").hidden = false;
                    localStorage.setItem('niveau', parseInt(localStorage.getItem('niveau'))+1);
                }     
            }
        }
        this.#mapActuelle[newCoordonnee.x][newCoordonnee.y] = this.#joueur;
        this.#listeEnnemi.forEach(ennemi => {
            ennemi.comportement();
            if(!this.#joueur.enVie){
                document.getElementById("mort").hidden = false;
            }
        });

    }

    get mapActuelle() { return this.#mapActuelle; }
    get joueur() { return this.#joueur; }
    get nbCle() { return this.#nbCle; }
    get mapSauvegarde() { return this.#mapSauvegarde; }

    set joueur(joueur) { this.#joueur = joueur;}


}