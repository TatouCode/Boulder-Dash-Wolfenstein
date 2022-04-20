import { Personnage } from "./personnage.js";

export class Mur extends Personnage{

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
    }
}