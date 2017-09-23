import { Component, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

@Component({
    
    selector: 'app-searchbar',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './searchbar.css' ],
    templateUrl: './searchbar.html',
    
})
export class Searchbar
    {

        // Создаем платформу для эмита
        @Output() search: EventEmitter<string> = new EventEmitter();

        // Создаем свойство для передачи значения
        searchString: string;

        constructor(){}


        // Создаем метод поиска
        onSearch(searchString: string)
        {
            this.search.emit(searchString);
        }
    }