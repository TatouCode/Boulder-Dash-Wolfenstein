import { Personnage } from "../modeles/personnage.js";
import { Coordonnee } from "../modeles/coordonnee.js";
import { Vide } from "../modeles/vide.js";

export class Ennemi extends Personnage{

    constructor(coordonnee, type, urlSprite, niveau){
        super(coordonnee, type, urlSprite, niveau);
    }

    comportement(){
        if(this.niveau.mapActuelle[this.coordonnee.x+1][this.coordonnee.y].type == "V"){
            if(this.niveau.mapActuelle[this.coordonnee.x+2][this.coordonnee.y].type == "J"){
                //Si case x+1 vide et case x+2 joueur
                let videCoord = new Coordonnee(this.coordonnee.x, this.coordonnee.y);
                this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = new Vide(videCoord, "V", "", this);
                this.coordonnee.x += 1;
                this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = this;
                this.niveau.joueur.enVie = false;
            }
            let videCoord = new Coordonnee(this.coordonnee.x, this.coordonnee.y);
            this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = new Vide(videCoord, "V", "", this);
            this.coordonnee.x += 1;
            this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = this;
        }
        while(this.niveau.mapActuelle[this.coordonnee.x+1][this.coordonnee.y].type == "V"){
            let videCoord = new Coordonnee(this.coordonnee.x, this.coordonnee.y);
            this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = new Vide(videCoord, "V", "", this);
            this.coordonnee.x += 1;
            this.niveau.mapActuelle[this.coordonnee.x][this.coordonnee.y] = this;
        }
    }

    deplacementPossible(newCoord){
        let ok = true;
        if(this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "M" || this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "D" 
            || this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "E"|| this.niveau.mapActuelle[newCoord.x][newCoord.y].type == "L"){
            ok = false;
        }
        return ok;
    }
}