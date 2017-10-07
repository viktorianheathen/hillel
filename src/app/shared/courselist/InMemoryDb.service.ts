import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { CourseItem } from './courselist.model';

@Injectable()
export class InMemoryCoursesService implements InMemoryDbService {
    private courseList: CourseItem[] = [{
        id: 1,
        name: 'Lesson 1',
        date: new Date(),
        desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                                            Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
                                            семантика рыбного свой за вопроса, несколько рукопись проектах.`,
        src: "string",
        duration: '1h 28m',
        hide: true
        
    },
    {
        id: 2,
        name: 'Lesson 2',
        date: new Date(),
        desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                                            Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
                                            семантика рыбного свой за вопроса, несколько рукопись проектах.`,
        src: "string",
        duration: '3h 15m',
        hide: false
    },
    {
        id: 3,
        name: 'Lesson 3',
        date: new Date(),
        desc: `Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.
                                            Рыбными силуэт, злых агенство единственное которой которое свою коварный она точках пунктуация,
                                            семантика рыбного свой за вопроса, несколько рукопись проектах.`,
        src: "string",
        duration: '2h 10m',
        hide: false
    }];

    constructor() {
    }

    createDb() {

        // 'api/course-list'
        return {
            'course-list': this.courseList
        };
    }
}