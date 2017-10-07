import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { EditCourseComponent } from './pages/edit/EditCourse.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'edit/:id', component: EditCourseComponent },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];


export const routes = RouterModule.forRoot(ROUTES, {

  useHash: true

})
