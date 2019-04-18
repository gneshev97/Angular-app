import { Injectable } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';   
import { Recipe } from '../recipe/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';



@Injectable()

export class DataStorageService{
    constructor(private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService){}

    storeRecipes(){
   // const headers = new HttpHeaders().set('Authorization', 'asdasd');

      // return this.httpClient.put('https://ng-recipe-book-eb12f.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      //     observe: 'body',
      //     params: new HttpParams().set('auth', token)
      //    // headers: headers
      // }); //put request if we want to overwrite data
    //}
    const req = new HttpRequest('PUT', 'https://ng-recipe-book-eb12f.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
        reportProgress: true
    })
    return this.httpClient.request(req);    
}
    getRecipes(){

        this.httpClient.get<Recipe[]>('https://ng-recipe-book-eb12f.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json'
        })
        .pipe(map((recipes)=>{
            for(let recipe of recipes){
                if(!recipe['ingredients']){
                    recipe['ingredients'] = [];
                 }
            }
            return recipes;
        })).subscribe((recipes: Recipe[])=>{
         this.recipeService.setRecipes(recipes);
        });
    }
}