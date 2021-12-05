import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class MentorService {

  constructor(private http : HttpClient) { }
  public topMentors = [
    {name : "sample1", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample2", education:"btech", rating:4, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample3", education:"btech", rating:4, companyname:"None", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample4", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample5", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample6", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample7", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample8", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    {name : "sample9", education:"btech", rating:5, companyname:"BNY", college:"NIT", currentdesig:"SDE1",profile:"../../../assets/mentor.jpeg"},
    
  ];
  public getTopMentors() {
    //return this.http.get(`${baseUrl}/topmentors/`);
    return this.topMentors;
  }
  public addMentor(Dto : any) {
    return this.http.post(`${baseUrl}/mentor/`,Dto);
  }
  
}
