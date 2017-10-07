import { Injectable } from "@angular/core";
import { CourseItem } from './courselist.model';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


@Injectable()
export class CoursesService{
        

    constructor(private http: Http){}

    private courseListSubject: Subject<CourseItem[]> = new Subject(); // Создаем обзерабл для выыода списка

    // Получаем список элементов
    getCourseItems(): Observable<CourseItem[]> 
    {
        return this.courseListSubject.asObservable()
        .startWith([...this.courseList]);
    }

    createDb()
    {
        return {
            "course-list": this.courseList
        }
    }

    addCourse(course: CourseItem)
    {
        this.courseList.push(course);
    }

    // Удаляем элемент из массива
    deleteCourse(index:number): void
    {
        // this.courseList.splice(index, 1);
        // console.log(index);

        // this.courseListSubject.next(this.courseList);

        this.http.delete(`api/course-list/${index}`)
        .subscribe();
    }

    onEditCourse(courseItem: CourseItem): void 
    {
        const findCourse = this.courseList.find((course: CourseItem) => {

            return course.id === courseItem.id;

        });

        Object.assign(findCourse, courseItem);
    }

    getCourseById(id: string): Observable<CourseItem> {
        // return {...this.courseList.find((course: CourseItem) => course.id === id)};
        return this.http.get(`api/course-list/${id}`).map((res: Response) => res.json().data);
    }

}
