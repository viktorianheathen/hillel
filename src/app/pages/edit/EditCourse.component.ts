import { Component, ViewEncapsulation, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CourseItem } from '../../shared/courselist/courselist.model';

import { CoursesService } from '../../shared/courselist/courselist.service';



@Component({
    
    selector: 'app-edit-course',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './EditCourse.css' ],
    templateUrl: './EditCourse.html',
    
})

export class EditCourseComponent
    {
        courseItem$: Observable<CourseItem>;

        id: number;
        
        constructor(private route: ActivatedRoute,
                    private router: Router,
                    private courseService:  CoursesService) {

            console.log('Тест!');

        }
        
        ngOnInit()
        {
            console.log('Єта страница инит!');
            this.route.params.subscribe((routerParams: Params) => { console.log(routerParams['id']) });

            /* --------------------------------------------------------------- */
            this.courseItem$ = this.route.params
            .switchMap((routerParams: Params) => {
                return this.courseService.getCourseById(routerParams['id']);
            });
        }

        ngOnDestroy()
        {
            console.log('Destroy!!!');
        }


    }
