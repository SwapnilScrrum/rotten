import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   constructor(private router:Router,private auth:AuthService){

   }

   goToHome(){
       this.router.navigate(['home']);
   }
   logout() {
    this.auth.signOut().then(() => {
      console.log('User signed out successfully');
      this.router.navigate(['/login']);
    }).catch((error) => {
      console.error('Error signing out:', error);
      // Optionally display an error message to the user
    });
  }

  
}
