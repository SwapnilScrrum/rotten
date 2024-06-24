import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = ''; // Variable to hold error message

  constructor(@Inject(AuthService) private authService: AuthService, private router: Router) {}

  async register() {
    if (this.email.trim().length === 0) {
      this.errorMessage = "Username is required";
    } else if (this.password.trim().length === 0) {
      this.errorMessage = "Password is required";
    } else {
      this.errorMessage = "";}
    try {
      const result = await this.authService.signUpWithEmailAndPassword(this.email, this.password);
      this.router.navigate(['/login']);
      console.log('Successfully registered:', result.user);

      // Optionally, you can automatically login the user after registration
     
      if (result.user) {
        // Redirect to the home page or another desired page
        this.router.navigate(['login']);
        return true; // Successful registration
      } else {
        return false; // Failed registration
      }
    } catch (error:any) {
      console.error('Error registering:');
      return false; // Failed registration
    }
  }
}
