import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Custom services
import { CoursesService } from "./courselist.service";

// Custom components
import { Courselist } from './courselist.component';
import { CourseItemComponent } from './courseitem/courseitem.component';
import { ButtonSet, EditButton, DeleteButton } from '../buttonset/index';

// Declarations
@NgModule({

declarations: [

Courselist, CourseItemComponent, ButtonSet, EditButton, DeleteButton

],

imports: [

CommonModule

],
providers: [

    CoursesService

],
exports: [

    Courselist,
    CourseItemComponent

]
})

export class CoursesModule {
    constructor(){}
}