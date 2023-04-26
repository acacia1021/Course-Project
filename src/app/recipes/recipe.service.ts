import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a Test', 'https://th.bing.com/th/id/OIP.9j6H7W8MRTMeZBv_KfSnIQHaJQ?pid=ImgDet&rs=1'),
        new Recipe('A Second Test Recipe', 'This is simply a second Test', 'https://th.bing.com/th/id/OIP.9j6H7W8MRTMeZBv_KfSnIQHaJQ?pid=ImgDet&rs=1')
    ];

    getRecipes() {
        //Will return a new instance of the same array
        return this.recipes.slice();
    }
}