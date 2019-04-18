import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipes', loadChildren: './recipe/recipes.module#RecipesModule'},
    {path: 'shopping', component: ShoppingComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}