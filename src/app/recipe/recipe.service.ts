import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService{
   recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Recipe 1', 
        'Grilled Chicken with potatoes', 
        'https://img.taste.com.au/gD11HemW/w720-h480-cfill-q80/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg',
        [
        new Ingredient('chicken', 1),
        new Ingredient('potatoes', 20)]),
        new Recipe('Recipe 2', 
        'Mexican Burito', 
        'https://img.taste.com.au/gD11HemW/w720-h480-cfill-q80/taste/2016/11/butter-chicken-with-naan-81484-1.jpeg',
        [
        new Ingredient('bread', 1),
        new Ingredient('beans', 1),
        new Ingredient('rice', 1)])];

        constructor(private shoppingService: ShoppingService){}

        setRecipes(recipes: Recipe[]){
            this.recipes = recipes;
            this.recipesChanged.next(this.recipes.slice());
        }

        getRecipes(){
            return this.recipes.slice(); 
            //vrushta kopie na masiva v tozi service
        }

        getRecipe(index: number){
            return this.recipes[index];
        }
        addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.shoppingService.addIngredients(ingredients);
        }
        addRecipe(recipe: Recipe){
            this.recipes.push(recipe);
            this.recipesChanged.next(this.recipes.slice());
        }
        updateRecipe(index: number, newRecipe: Recipe){
            this.recipes[index] = newRecipe;
            this.recipesChanged.next(this.recipes.slice());
        }
        deleteRecipe(index: number){
            this.recipes.splice(index, 1);
            this.recipesChanged.next(this.recipes.slice());
        }
}