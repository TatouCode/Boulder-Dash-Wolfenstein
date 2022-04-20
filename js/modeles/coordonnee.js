
export class Coordonnee{

    #x;
    #y;

    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    get x() { return this.#x; }
    get y() { return this.#y; }

    set x(x) { this.#x = x; }
    set y(y) { this.#y = y; }
}