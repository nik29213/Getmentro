import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mentorprofile',
  templateUrl: './mentorprofile.component.html',
  styleUrls: ['./mentorprofile.component.css']
})
export class MentorprofileComponent implements OnInit {

  constructor(private loginService : LoginService) { }
  mentor : any;
  ngOnInit(): void {
    this.mentor = this.loginService.getMentor();
    this.mentor.rating = 5;
    this.mentor.profile = "";
    this.mentor.name = "Aditya Verma"
  }

}
