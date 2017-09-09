import { Component, Input, ViewEncapsulation} from '@angular/core';

interface CourseItem {
	
	id: number;
	name: string;
	date: number;
	desc: string | number;
	src: string;
	duration: number;
	
}

@Component({
    
    selector: 'app-courselist',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './courselist.css' ],
    templateUrl: './courselist.html',
    
})

export class Courselist
    {
        @Input() public courseList: CourseItem[] = [{
            
            id: 1,
            name: 'Lesson 1',
            date: new Date(),
            desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
												Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
												семантика рыбного свой за вопроса, несколько рукопись проектах.`,
            src: "string",
            duration: '1h 28m'
            
        },
        {
            id: 2,
            name: 'Lesson 2',
            date: new Date(),
            desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
												Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
												семантика рыбного свой за вопроса, несколько рукопись проектах.`,
            src: "string",
            duration: '3h 15m'
        },
        {
            id: 3,
            name: 'Lesson 3',
            date: new Date(),
            desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
												Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
												семантика рыбного свой за вопроса, несколько рукопись проектах.`,
            src: "string",
            duration: '2h 10m'
        }];
        
        constructor() {}
    }
