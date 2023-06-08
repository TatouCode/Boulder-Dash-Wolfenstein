import { Sujet } from "../patterns/sujet.js";
import { Niveau } from "../modeles/niveau.js";

export class Controleur extends Sujet{

    #niveau;

    constructor(){
        super();
        this.#niveau = new Niveau();

    }

    nouvellePartie(){
        if(localStorage.getItem('niveau') != null){
            localStorage.setItem('niveau', localStorage.getItem('niveau'));
            this.#niveau.niveauSuivant(parseInt(localStorage.getItem('niveau')));
        }
        else{
            localStorage.setItem('niveau', '0');
            this.#niveau.nouvellePartie();
        }
        this.notifier();
    }

    niveauSuivant(numeroNiveau){
        this.#niveau.niveauSuivant(numeroNiveau);
        this.notifier();
    }

    sauvegarde(){
        let niveauSauvegarde = [
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","T","T","T","T","T","T","T","T","T","T","T","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","M","M","M","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","T","T","T","E","T","E","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","M","M","T","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","D","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","E","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","T","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","T","M","M","E","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","M","T","M","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","M","M","M","M","M","M","T","M","T","M","M","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","E","E","E","E","M","T","T","M","T","M","D","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","T","M","M","E","M","M","M","M","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","M","M","M","M","M","M","M","D","T","T","T","T","T","M"],
            ["M","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","E","M","T","T","T","T","T","D","M","M","M","M","T","T","J","M"],
            ["M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M","M"]
            ];
        for (var i = 0; i < 16; i++){
            for (var j = 0; j < 32; j++){
                niveauSauvegarde[i][j] = this.#niveau.mapActuelle[i][j].type;
            }
        }
        localStorage.setItem('sauvegarde', JSON.stringify(niveauSauvegarde));
    }

    chargeNiveau(niveauCharge){
        this.#niveau.initialiseMap(niveauCharge);
        this.notifier();
    }

    get niveau() { return this.#niveau; }
    
}