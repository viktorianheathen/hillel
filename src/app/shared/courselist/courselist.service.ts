import { Injectable } from "@angular/core";
import { CourseItem } from './courselist.model';


@Injectable()
export class CoursesService {

    private courseList: CourseItem[] = [{
        
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

    constructor(){}

    // Получаем список элементов
    getCourseItems(): CourseItem[]
    {
        return this.courseList;
    }


    // Удаляем элемент из массива
    deleteCourse(index:number): void
    {
        this.courseList.splice(index, 1);
        console.log(index);
    }

    onEditCourse(index:number): void 
    {
        let th_el = this.courseList[index];
        th_el.name = "New Lesson " + th_el.id;
        th_el.desc = "New description";
    }

}
