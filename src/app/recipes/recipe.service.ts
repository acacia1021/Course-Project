import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Delicious German Recipe', 'https://thumbs.dreamstime.com/b/schnitzel-french-fries-dish-served-ketchup-mayonnaise-lemon-vegetables-close-up-white-plate-87430745.jpg', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
        new Recipe('Burger', 'An American Classic', 'https://i0.wp.com/thenutritionadventure.com/wp-content/uploads/2017/07/PourHouseAmericanBurger.jpg?resize=5236%2C3490', [new Ingredient('Buns', 2), new Ingredient('Meat', 1)])
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes() {
        //Will return a new instance of the same array
        return this.recipes.slice();
    }
}