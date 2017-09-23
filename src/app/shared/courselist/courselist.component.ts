import { Component, Input, ViewEncapsulation, OnInit, OnChanges, OnDestroy, ViewChild, EventEmitter, Output, SimpleChanges} from '@angular/core';
import { CourseItem } from './courselist.model';
import { CoursesService } from './courselist.service';
import { CourseItemComponent } from './courseitem/courseitem.component';
import { SortPipe } from './sort.pipe';


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

        constructor(private coursesService: CoursesService, private sortPipe: SortPipe) {

            this.filterCourses = this.filterCourses.bind(this);

        }

        public ngOnInit(): void
        {
            this.courseList = this.coursesService.getCourseItems();
            console.log(this.sortPipe.transform<CourseItem>(this.courseList, 'duration'));
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

        filterCourses(searchString: string, courseList: CourseItem[]): CourseItem[]
        {
            return courseList.filter((course: CourseItem) => course.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
        }
    }
