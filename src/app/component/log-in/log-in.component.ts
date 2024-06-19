import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
    username:string="";
    password:string="";
    errMess:string="";

    constructor(private auth:AuthService,private router:Router){

    }

    handleClick(){
      if(this.username.trim().length===0)
        {
            this.errMess="Username is required"
        }
        else if(this.password.trim().length===0)
          {
              this.errMess="Password is required"
          }
          else{
            this.errMess="";
            let res=this.auth.login(this.username,this.password);
            if(res===200){
               this.router.navigate(['home'])
            }
            if(res===403){
              this.errMess="Invalid Credentials";
            }
          }
    }
}
