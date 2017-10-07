import { Component, Input, ViewEncapsulation, OnInit, OnChanges, OnDestroy, ViewChild, EventEmitter, Output, SimpleChanges} from '@angular/core';
import { CourseItem } from './courselist.model';
import { CoursesService } from './courselist.service';
import { CourseItemComponent } from './courseitem/courseitem.component';
import { SortPipe } from './sort.pipe';

import { Observable } from 'rxjs/Observable';

import { Http } from '@angular/http';


@Component({
    
    selector: 'app-courselist',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './courselist.css' ],
    templateUrl: './courselist.html',
    
})

export class Courselist implements OnInit, OnDestroy, OnChanges
    {
        @Input() public courseList: CourseItem[];
        @Input() filterString: string;
        
        @Output() search: EventEmitter<string> = new EventEmitter();
        @ViewChild(CourseItemComponent) private course: CourseItemComponent;

        constructor(private coursesService: CoursesService, private sortPipe: SortPipe, private http: Http) {


        }

        public ngOnInit(): void
        {
            
        
        }

        public ngOnDestroy(): void
        {

        }


        // Отлавливаем новые данные
        ngOnChanges(changes: SimpleChanges): void 
        {
            console.log(changes);
            console.log(changes['filterString'] && changes['filterString'].currentValue);
        }

        onDeleteCourse(index:number)
        {
            this.coursesService.deleteCourse(index);
        }

        onEditCourse(courseItem: CourseItem): void {

            console.log('Editing! Courselist!');
            this.coursesService.onEditCourse(courseItem);

        }

       
    }
