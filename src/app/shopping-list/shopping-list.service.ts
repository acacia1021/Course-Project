import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    //Allows for the copy of the Ingredients to be pushed in the second line of addIngredient()
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    getIngredients() {
        //.slice() creates a copy of the original array - which is then used in addIngredient()
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        //Does not push to the UI, only updates in logic, because it is a NEW array
        this.ingredients.push(ingredient);
        //Pushed to UI
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}