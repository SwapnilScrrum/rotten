
import { Component, Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { GoogleAuthProvider } from 'firebase/auth'; // Import GoogleAuthProvider from Firebase SDK
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
@Injectable({
  providedIn: 'root'
})
export class LogInComponent {

  email="";
  password="";
  errorMsg="";
  imageUrl: string | null = null;

  constructor(private authService: AngularFireAuth, private router: Router,private storage:StorageService) {}

  async login(){
    if (this.email.trim().length === 0) {
      this.errorMsg = "Email is required";
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
    } else {
      this.errorMsg = "";
    }
    try {
      const result = await this.authService.signInWithEmailAndPassword(this.email, this.password);
      console.log("Error is happening");
      if (result.user) {
        this.router.navigate(['/home']);
        return true;
      } else {
        this.router.navigate(['/']);
        return false; // Failed login
      }
    } catch (error) {
      console.log('ijvoijoifjoiviofoijofjojofdjjfojofj')
    
      console.error('Error logging in:', error);
      return false; // Failed login
    }
  }

  async googleSignIn() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await this.authService.signInWithPopup(provider);
      if(result){
        this.router.navigate(['/home']);
      }
      console.log('Successfully logged in with Google:', result.user);
      // Handle successful login
    } catch (error) {
      console.error('Error logging in with Google:', error);
      // Handle error
    }
  }
  private updateUserData() {
    // Your custom user handling logic here (e.g., storing user data)
  }
  loadImage(filePath: string) {
    this.storage.getImageUrl(filePath).subscribe(url => {
      this.imageUrl = url;
    });
  }

  
}
