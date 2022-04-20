import { Personnage } from "../modeles/personnage.js";

export class Terre extends Personnage{

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
    }
}