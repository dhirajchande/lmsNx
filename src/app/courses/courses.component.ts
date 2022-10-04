import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
courses: any =[
  {name:'Angular', about:'Learn online and earn valuable credentials from top universities',duration:'12 Hrs', url:'https://www.freecodecamp.org/news/content/images/2020/04/Copy-of-Copy-of-Travel-Photography-1.png'},
  {name:'ReactJs', about:'Learn online and earn valuable credentials from top universities',duration:'9 Hrs', url:'https://cdn.hashnode.com/res/hashnode/image/upload/v1622008722227/ResNcwZyph.png'},
  {name:'Cloud Computing', about:'Learn online and earn valuable credentials from top universities',duration:'15 Hrs', url:'https://media.istockphoto.com/photos/cloud-computing-concept-communication-network-picture-id1277731016?k=20&m=1277731016&s=612x612&w=0&h=xwj4AeLiu3C5HS-IcMV-tr0NXpqJwotlk8-8z-ROV1M='},
  {name:'Bootstrap', about:'Learn online and earn valuable credentials from top universities',duration:'16 Hrs', url:'https://www.quantumversity.com/wp-content/uploads/2020/11/bootstrap4.png'},
  {name:'Machine Learning', about:'Learn online and earn valuable credentials from top universities',duration:'11 Hrs', url:'https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?format=jpg&width=960'},
  {name:'Data Scence ', about:'Learn online and earn valuable credentials from top universities',duration:'18 Hrs', url:'https://www.simplilearn.com/ice9/free_resources_article_thumb/Data-Science-vs.-Big-Data-vs.jpg'},
  {name:'Core Java', about:'Learn online and earn valuable credentials from top universities',duration:'18ss Hrs', url:'https://5.imimg.com/data5/BA/IB/GLADMIN-54720765/core-java-500x500.png'}

]

  constructor() { }

  ngOnInit(): void {
  }

}
