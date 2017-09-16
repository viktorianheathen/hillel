import { Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-edit-button',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './edit_button.css' ],
    templateUrl: './edit_button.html',
    
})

export class EditButton
    {   
        @Output() EditClick: EventEmitter<string> = new EventEmitter();

        constructor() {}

        onEditClick(): void {
            
            console.log('Edit button');
            // this.EditClick.emit('Edit click!');
            
        }
    }
    
