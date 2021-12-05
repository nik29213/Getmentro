import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { MentorService } from 'src/app/services/mentor.service';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-findmentor',
  templateUrl: './findmentor.component.html',
  styleUrls: ['./findmentor.component.css']
})
export class FindmentorComponent implements OnInit {

  constructor(private mentorService : MentorService,private skillService : SkillService, private loginService : LoginService) { }
  public topMentors : any;
  public allSkills : any;
  public selected = [
    
  ];
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(data=>{this.allSkills=data});
    this.topMentors = this.mentorService.getTopMentors();
    this.skillService.getAllSkills().subscribe(data=>{this.allSkills=data})
  }

  
}
