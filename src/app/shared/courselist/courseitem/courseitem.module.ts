import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseItemComponent } from './courseitem.component';
import { ButtonSet } from '../../buttonset/buttonset.component';
import { EditButton, DeleteButton } from '../../buttonset/index';

import { BackgroundDirective } from './background.directive';

@NgModule({

imports: [

    CommonModule

],
declarations: [

    CourseItemComponent, ButtonSet, EditButton, DeleteButton, BackgroundDirective

],

exports: [

    CourseItemComponent

]

})


export class CourseItemModule {



}