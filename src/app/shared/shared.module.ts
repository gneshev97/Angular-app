import { NgModule } from '@angular/core';
import { DropdownDirective } from './dropdown.directive';
import { TableComponent } from '../table/table.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdownDirective, TableComponent
    ],
    exports: [
        DropdownDirective,
        CommonModule,
        TableComponent
    ]
})
export class SharedModule{

}