import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCourseComponent } from './EditCourse.component';
import { Editform } from '../../shared/editform/editform.component';

@NgModule({

    imports: [ CommonModule ],
    declarations: [

        EditCourseComponent,
        Editform

    ],
    providers: []

})
export class EditCourse 
{
    constructor(){}

}