import { Personnage } from "../modeles/personnage.js";

export class Hero extends Personnage{

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
    }

    deplacementPossible(newCoord){
        let ok = true;
        if(this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "E" || this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "M"){
            ok = false;
        }
        return ok;
    }
}