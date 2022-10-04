import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MyCoursesComponent,
    ProfileComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
