import { NgModule } from '@angular/core';
import { ShoppingComponent } from './shopping.component';
import { ShoppingEdit } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
    ShoppingComponent,
    ShoppingEdit,
    ],
    imports:[
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class ShoppingModule{}