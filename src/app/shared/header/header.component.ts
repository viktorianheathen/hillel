import { Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-header',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './header.css' ],
    templateUrl: './header.html',
    
})
export class Header
    {
        @Input() logoTitle: string;
        @Output() logoClick: EventEmitter<string> = new EventEmitter();
        
        constructor()
        {
               
        }
        
        onLogoClick(): void {
            
            console.log('logo click');
            this.logoClick.emit('Header click!!!!');
            
        }
    }