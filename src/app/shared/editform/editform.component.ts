import { Component, ViewEncapsulation, Input, Output } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CourseItem } from '../../shared/courselist/courselist.model';

import { CoursesService } from '../../shared/courselist/courselist.service';


@Component({
    
    selector: 'app-editform',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [ './editform.css' ],
    templateUrl: './editform.html',
    
})

export class Editform
    {
        @Input() course: CourseItem;
    }
