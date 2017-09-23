import { Component, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {CourseItem} from '../courselist.model';

@Component({
    
    selector: 'app-courseitem',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './courseitem.css' ],
    templateUrl: './courseitem.html',
    
})

export class CourseItemComponent
    {
        @Input() public courseItem: CourseItem;
        @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
        @Output() EditCourse: EventEmitter<any> = new EventEmitter();
        
        constructor() {}

        onDeleteCourse(){

            this.deleteCourse.emit();
            console.log('Course Item');

        }

        onEditCourse(): void {
            
            this.EditCourse.emit();
            console.log('Editing! CourseItem!');

        }
    }
