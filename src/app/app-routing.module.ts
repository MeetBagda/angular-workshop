import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutComponent } from './about/about.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  {path: '', component: FirstpageComponent},
  { path: 'about', component:AboutComponent},
  {path: 'faculty', component: FacultyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
