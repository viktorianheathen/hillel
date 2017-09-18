import { Component, Input, ViewEncapsulation, OnInit, OnDestroy} from '@angular/core';
import { CourseItem } from './courselist.model';
import { CoursesService } from './courselist.service';

@Component({
    
    selector: 'app-courselist',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './courselist.css' ],
    templateUrl: './courselist.html',
    
})

export class Courselist implements OnInit, OnDestroy
    {
        @Input() public courseList: CourseItem[];
        
        constructor(private coursesService: CoursesService) {}

        public ngOnInit(): void
        {
            this.courseList = this.coursesService.getCourseItems();
        }

        public ngOnDestroy(): void
        {

        }

        onDeleteCourse(index:number)
        {
            this.coursesService.deleteCourse(index);
        }

        onEditCourse(index:number): void {

            console.log('Editing! Courselist!');
            this.coursesService.onEditCourse(index);

        }
    }
