import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Custom services
import { CoursesService } from "./courselist.service";


import { CourseItemModule } from './courseitem/courseitem.module';

// Custom components
import { Courselist } from './courselist.component';

import { SortPipe } from './sort.pipe';
import { TransformPipe } from './transform.pipe';

// Declarations
@NgModule({

declarations: [

Courselist, SortPipe, TransformPipe

],

imports: [

CommonModule, CourseItemModule

],
providers: [

    CoursesService, SortPipe

],
exports: [

    Courselist

]
})

export class CoursesModule {
    constructor(){}
}