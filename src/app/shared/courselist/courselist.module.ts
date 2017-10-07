import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Custom services
import { CoursesService } from "./courselist.service";


import { CourseItemModule } from './courseitem/courseitem.module';
import { HttpModule } from '@angular/http';
import { HttpInMemoryWebApiModule } from 'angular-in-memory-web-api';

// Custom components
import { Courselist } from './courselist.component';
import { InMemoryCoursesService } from './InMemoryDb.service';

import { SortPipe } from './sort.pipe';
import { TransformPipe } from './transform.pipe';

// Declarations
@NgModule({

declarations: [

Courselist, SortPipe, TransformPipe

],

imports: [

CommonModule, CourseItemModule, HttpModule, HttpInMemoryWebApiModule.forRoot(InMemoryCoursesService)

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