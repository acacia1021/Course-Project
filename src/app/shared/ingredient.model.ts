export class Ingredient {
    // public name: string;
    // public amount: number;

    //We can put the public accessor in the contructor arguments instead of defining in the class
    constructor( public name: string, public amount: number) {
        // this.name = name;
        // this.amount = amount;
    }
}