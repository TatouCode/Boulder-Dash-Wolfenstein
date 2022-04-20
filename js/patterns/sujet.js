
export class Sujet{

    #observateurs;

    constructor(){
        this.#observateurs = [];
    }

    ajouteObserbateur(observateur){
        this.#observateurs.push(observateur);
    }

    notifier(){
        this.#observateurs.forEach(observateur => {
            observateur.update();
        });
    }


}