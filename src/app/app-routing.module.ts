import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AboutComponent } from './about/about.component';
import { FacultyComponent } from './faculty/faculty.component';
import { StudentComponent } from './student/student.component';
import { CrudPageComponent } from './crud-page/crud-page.component';
import { LaptopComponent } from './laptop/laptop.component';

const routes: Routes = [
  {path: '', component: FirstpageComponent},
  { path: 'about', component:AboutComponent},
  { path: 'data', component:CrudPageComponent},
  {path: 'faculty', component: FacultyComponent},
  {path: 'student', component: StudentComponent},
  {path: 'laptop', component: LaptopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
