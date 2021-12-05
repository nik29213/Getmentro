import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home.component';
@Component({
  selector: 'app-mentor-carousel',
  templateUrl: './mentor-carousel.component.html',
  styleUrls: ['./mentor-carousel.component.css']
})
export class MentorCarouselComponent implements OnInit {

  @Input() mentor : any;
  constructor() { }

  ngOnInit(): void {
    
  }

}
