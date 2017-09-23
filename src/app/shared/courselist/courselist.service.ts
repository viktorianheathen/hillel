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

    constructor(){}

    // Получаем список элементов
    getCourseItems(): CourseItem[]
    {
        return this.courseList;
    }

    addCourse(course: CourseItem)
    {
        this.courseList.push(course);
    }

    // Удаляем элемент из массива
    deleteCourse(index:number): void
    {
        this.courseList.splice(index, 1);
        console.log(index);
    }

    onEditCourse(courseItem: CourseItem): void 
    {
        const findCourse = this.courseList.find((course: CourseItem) => {

            return course.id === courseItem.id;

        });

        Object.assign(findCourse, courseItem);
    }

}
