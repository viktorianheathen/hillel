/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

import { CoursesService } from './shared/courselist/courselist.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { CourseItem } from './shared/courselist/courselist.model';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/combineLatest';

import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';


/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.component.css'
  ],
  template: `
    <div class="main">


        <app-header [logoTitle]="appLogoTitle" (logoClick)="onLogoCLick($event)"></app-header>


		<div class="content">
			<div class="container">
				<div class="row">
					<router-outlet></router-outlet>
				</div>
			</div>
		</div>
	</div>
	

   <app-footer></app-footer>


  `
})
export class AppComponent implements OnInit {
  public angularclassLogo = 'assets/img/angularclass-avatar.png';
  public name = 'Angular 2 Webpack Starter';
  public url = 'https://twitter.com/AngularClass';
  
  public appLogoTitle = `LessLister`;
  public courseList$: Observable<CourseItem[]>;
  public filterStringSubject: Subject<string> = new BehaviorSubject('');

  constructor(
    public appState: AppState,
    private coursesService: CoursesService,
    private http: Http
  ) {}

  public ngOnInit() {
    // this.courseList$ = this.filterStringSubject
    // .switchMap((filterString: string) => {
    //     return this.coursesService.getCourseItems()
    //         .map((courseList: CourseItem[]) => {
    //             return this.filterCourses(filterString, courseList);
    //         });
    // });

    // this.courseList$ = this.filterStringSubject.asObservable()
    // .combineLatest(this.coursesService.getCourseItems())
    // .map(([filterString, courseList]: [string, CourseItem[]]) => {
    //     return this.filterCourses(filterString, courseList);
    // });

    this.courseList$ = this.filterStringSubject.asObservable()
    .combineLatest(
        this.http.get('api/course-list')
            .map((data: Response) => data.json().data)
    )
    .map(([filterString, courseList]: [string, CourseItem[]]) => {
        return this.filterCourses(filterString, courseList);
    });

  }

  onLogoCLick(headerString: string): void
    {
        console.log('APP COMPONENT', headerString);
    }

    onSearch(search: string)
    {
        this.filterStringSubject.next(search);
    }

    filterCourses(searchString: string, courseList: CourseItem[]): CourseItem[]
    {
        return [...courseList].filter((course: CourseItem) => course.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
    }
    
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
