import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private _snackBar: MatSnackBar, private router : Router) { }

  public loginData = {
    username:'',
    password : '',
  };
  
  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.loginData.username == null || this.loginData.password == null || this.loginData.username == '' || this.loginData.password == '') {
      this.openSnackBar("Username and Password is mandatory", "close");
      return;
    }
    
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);

            //------------mentor---------------------------------------------------------------
            console.log("initiating mentor");
            this.loginService.getCurrentMentor().subscribe(
              (mentor:any)=>{
                console.log("got mentor ",mentor);
                this.loginService.setMentor(mentor);
                
              },
              (error)=>{
                console.log("ERROR msg");
                console.log(error);
              }
            );
            //--------------------------------------------------------------------------------
            //redirect to suitable dashboard
            if(this.loginService.getUserRole() == 'ADMIN'){
              //window.location.href = "/admin";

              this.router.navigate(["admin"]);
              this.loginService.loginStatusSubject.next(true);

            } else if(this.loginService.getUserRole() == 'USER'){
              //window.location.href = "/user";
              this.router.navigate(["user"]);
              this.loginService.loginStatusSubject.next(true);

            }else {
              this.loginService.logout();
            }
          },
          (error)=>{
            console.log("ERROR msg");
            console.log(error);
          }
        );
        
      },
      (error)=>{

        this.openSnackBar("Something went wrong", "close");
        console.log(error);
        return;
        
      }
    );
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  
}
