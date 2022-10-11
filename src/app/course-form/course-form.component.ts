import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  first_name = new FormControl('');
  last_name = new FormControl('');
  contact_number = new FormControl('');
  DOB = new FormControl('');


  constructor() { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.first_name.value);
    console.log(this.last_name.value);
    console.log(this.contact_number.value);
    console.log(this.DOB.value);
    


  }
}
