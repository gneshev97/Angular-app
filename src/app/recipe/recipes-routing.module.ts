import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeComponent } from './recipe.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeDetail } from './recipe-detail/recipe-detail.component';
import { AuthGuard } from '../auth/auth-guard.service';


const recipesRoutes: Routes = [
    {path: '', component: RecipeComponent, // v tozi komponent se registrirat child route
    children:[{path: '', component: RecipeStartComponent},//vsichki recipeta shte imat recipe otpred
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecipeDetail},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
]}
];

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule{

}