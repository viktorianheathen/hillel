import { Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-edit-button',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './edit_button.css' ],
    templateUrl: './edit_button.html',
    
})

export class EditButton
    {   
        @Output() EditCourse: EventEmitter<string> = new EventEmitter();

        constructor() {}

        onEditCourse(): void {
            
            this.EditCourse.emit();
            console.log('Editing! CLick button!');

        }
    }
    
