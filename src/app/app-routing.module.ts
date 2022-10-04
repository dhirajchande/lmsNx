import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'courses', component:CoursesComponent},
  {path:'myCourses', component:MyCoursesComponent},
  {path:'courseForm', component:CourseFormComponent},
  {path:'profile', component:ProfileComponent},
  {path:"activities", component:ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
