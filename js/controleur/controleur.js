import { Sujet } from "../patterns/sujet.js";
import { Niveau } from "../modeles/niveau.js";

export class Controleur extends Sujet{

    #niveau;

    constructor(){
        super();
        this.#niveau = new Niveau();

    }

    nouvellePartie(){
        this.#niveau.nouvellePartie();
        this.notifier();
    }

    get niveau() { return this.#niveau; }


}