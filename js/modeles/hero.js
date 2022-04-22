import { Personnage } from "../modeles/personnage.js";
import { Coordonnee } from "../modeles/coordonnee.js";

export class Hero extends Personnage{

    #enVie;

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
        this.#enVie = true;
    }

    deplacementPossible(newCoord){
        let ok = true;
        if(this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "M"){
            ok = false;
        }
        //Le joueur ne peut déplacer les ennemies verticalement
        if(this.niveau.mapActuelle[newCoord.x][this.coordonnee.y].type == "E"){
            ok = false;
        }
        //Le joueur peut déplacer les ennemies horizontalement
        if(this.niveau.mapActuelle[this.coordonnee.x][newCoord.y].type == "E"){
            let coord;
            if(newCoord.y - this.coordonnee.y > 0){
                coord = new Coordonnee(newCoord.x, newCoord.y + 1);
            }
            else{
                coord = new Coordonnee(newCoord.x, newCoord.y - 1);
            }
            //Uniquement si le bloque après l'ennemi n'est pas une cle ou un mur
            ok = this.niveau.mapActuelle[this.coordonnee.x][newCoord.y].deplacementPossible(coord);
        }
        return ok;
    }

    set enVie(bool) { this.#enVie = bool; }
    get enVie() { return this.#enVie; }

}