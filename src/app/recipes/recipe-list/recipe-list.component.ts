import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  // recipes will be of Recipe type, as an array == to an empty array at first, and then reference the model pieces
  // Here, the pieces are name, description, and imagePath
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a Test', 'https://th.bing.com/th/id/OIP.9j6H7W8MRTMeZBv_KfSnIQHaJQ?pid=ImgDet&rs=1')
  ];



  

}
