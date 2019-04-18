import { Component, OnInit, OnDestroy } from '@angular/core';

import { ShoppingService } from './shopping.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit, OnDestroy {
    ingredients: Ingredient[];
    private subscription : Subscription
    
    constructor(private shoppingService: ShoppingService) { }

    ngOnInit(){
        this.ingredients = this.shoppingService.getIngredient();
        this.subscription = this.shoppingService.ingredientChanged.subscribe((ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
        });
    }

    onAddedItem(index: number){
        this.shoppingService.startedEditing.next(index); //passvame indexa za da slushame za nego na drugo mqsto (in shopping-edit)
    } 

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    
}