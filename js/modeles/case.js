

export class Case 
{

    #x;
    #y;
    #type;

    constructor(x, y, type){
        this.#x = x;
        this.#y = y;
        this.#type = type;
    }

    get x() {return this.#x;}
    set x(x) { this.#x = x; }
    get y() {return this.#y;}
    set y(y) { this.#y = y; }
    get type() {return this.#type;}

    estAtteignable()
    {

    }

    comportement()
    {

    }

}