import { Component, Input, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-delete-button',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './delete_button.css' ],
    templateUrl: './delete_button.html',
    
})

export class DeleteButton
    {   
        @Output() deleteCourse: EventEmitter<any> = new EventEmitter();
        
        constructor() {}

        onDeleteCourse(){
        
                this.deleteCourse.emit();
        
        }
    }