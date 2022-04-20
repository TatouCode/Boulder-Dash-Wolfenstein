import { Coordonnee } from "../modeles/coordonnee.js";

export class Personnage{

    //Coordonnee du personnage
    #coordonnee;
    //Type du personnage (Joueur, Ennemi, Rocher ...)
    #type;
    //URL du sprite
    #urlSprite;
    //Niveau
    #niveau

    constructor(coordonnee, type, urlSprite, niveau){
        this.#coordonnee = coordonnee;
        this.#type = type;
        this.#urlSprite = urlSprite;
        this.#niveau = niveau;
    }

    mouvement(){
        throw "Doit être redéfinie";
    }

    comportement(){
        throw "Doit être redéfinie";
    }

    get coordonnee() { return this.#coordonnee; }
    get type() { return this.#type; }
    get urlSprite() { return this.#urlSprite; }
    get niveau() { return this.#niveau; }

    set coordonnee(coordonnee) { this.#coordonnee = coordonnee; }
    set type(type) { this.#type = type; }
    set urlSprite(urlSprite) { this.#urlSprite = urlSprite; }
    set niveau(niveau) { this.#niveau = niveau; }





}