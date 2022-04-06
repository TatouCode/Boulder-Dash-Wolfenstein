import { TableauJeu } from "../modeles/tableauJeu.js";

export class Controleur 
{
    #tableauJeu;

    constructor()
    {
        this.#tableauJeu = new TableauJeu();
    }

    get tableauJeu() { return this.#tableauJeu; }


    nouvellePartie()
    {
        this.#tableauJeu.nouvellePartie();
    }

}