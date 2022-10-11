import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';
import { DataTablesModule } from "angular-datatables";






@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MyCoursesComponent,
    ProfileComponent,
    CourseFormComponent,
    ActivitiesComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DataTablesModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
