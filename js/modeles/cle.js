import { Personnage } from "../modeles/personnage.js";

export class Cle extends Personnage{

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
    }
}