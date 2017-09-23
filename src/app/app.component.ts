/**
 * Angular 2 decorators and services
 */
import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { AppState } from './app.service';

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
					<div class="app_tools">
                        
                        <app-searchbar (search)="onSearch($event)"></app-searchbar>

						
						<div class="add_less_box">
							<button class="add_less_item">
								<i class="fa fa-plus-circle" aria-hidden="true"></i>
								<span>Add course</span>
							</button>
						</div>
					</div>
					<div class="courses_box">
						
                        <app-courselist [filterString]='filterString'></app-courselist>

					</div>
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
    
  public filterString: string = '';

  constructor(
    public appState: AppState
  ) {}

  public ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

  onLogoCLick(headerString: string): void
    {
        console.log('APP COMPONENT', headerString);
    }

    onSearch(search: string)
    {
        this.filterString = search;
    }
    
}

/**
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
