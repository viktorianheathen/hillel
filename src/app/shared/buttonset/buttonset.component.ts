import { Component, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-buttonset',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './buttonset.css' ],
    templateUrl: './buttonset.html',
    
})

export class ButtonSet
    {   
        @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
        @Output() EditCourse: EventEmitter<any> = new EventEmitter();

        constructor() {}

        onDeleteCourse(){

            this.deleteCourse.emit();

        }

        onEditCourse(): void {
            
            this.EditCourse.emit();
            console.log('Editing! Buttonset!');

        }
    }
