import { NgModule } from '@angular/core';

import { RecipeComponent } from './recipe.component';
import { RecipeList } from './recipe-list/recipe-list.component';
import { RecipeItem } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from './recipes-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../auth/auth-guard.service';

@NgModule({

declarations: [
    RecipeComponent,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    RecipeStartComponent,
    RecipeEditComponent
    ],  
imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule
    ],
    providers:[
        AuthGuard
    ]
})
export class RecipesModule{


}