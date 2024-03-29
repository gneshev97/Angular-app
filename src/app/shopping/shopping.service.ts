import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';


export class ShoppingService{
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10)
    ];

    getIngredient(){
        return this.ingredients.slice();
    }

    takeIngredient(index: number){
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
        
    }

    addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
       this.ingredientChanged.next(this.ingredients.slice());
            
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
    
}