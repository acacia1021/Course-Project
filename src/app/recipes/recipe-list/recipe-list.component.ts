import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // recipes will be of Recipe type, as an array == to an empty array at first, and then reference the model pieces
  // Here, the pieces are name, description, and imagePath

  //Moved to Recipe.service
  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a Test', 'https://th.bing.com/th/id/OIP.9j6H7W8MRTMeZBv_KfSnIQHaJQ?pid=ImgDet&rs=1'),
  //   new Recipe('A Second Test Recipe', 'This is simply a second Test', 'https://th.bing.com/th/id/OIP.9j6H7W8MRTMeZBv_KfSnIQHaJQ?pid=ImgDet&rs=1')
  // ];

  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }


  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }



}
