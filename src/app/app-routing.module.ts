import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'courses', component:CoursesComponent},
  {path:'myCourses', component:MyCoursesComponent},
  {path:'courseForm', component:CourseFormComponent},
  {path:'profile', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
