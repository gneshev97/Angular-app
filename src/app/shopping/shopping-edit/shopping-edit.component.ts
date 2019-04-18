import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEdit implements OnInit, OnDestroy{
    @ViewChild('f') shoppingForm : NgForm;
   subscription: Subscription;
   editMode = false;
   editedItemIndex: number;
   editedItem : Ingredient;
   
    constructor(private shoppingService: ShoppingService){}

    ngOnInit(){
        this.subscription = this.shoppingService.startedEditing.subscribe((index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingService.takeIngredient(index);
        this.shoppingForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
        }
        )
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm){
        const value = form.value; //on the value property
        const newIngredient = new Ingredient(value.name, value.amount);
        if(this.editMode){
            this.shoppingService.updateIngredient(this.editedItemIndex, newIngredient);
        }else{
            this.shoppingService.addIngredient(newIngredient);
        }
        this.editMode = false;
        form.reset();
    }
    onClear(){
        this.shoppingForm.reset();
        this.editMode = false;
    }
    onDelete(){
        this.shoppingService.deleteIngredient(this.editedItemIndex);
        this.onClear();
    }

}