import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers'
  };


  constructor() { 
    
  }

  ngOnInit(): void {

  }

  

}
