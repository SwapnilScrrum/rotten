import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth:AngularFireAuth ,private router : Router, private firestore:AngularFirestore) {

  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email,password).then( (res) => {
      localStorage.setItem('token','true');

      if(res.user?.emailVerified == true) {
        this.router.navigate(['Home']);
      } else {
         alert("Envalid Credentials")
      }

  })}
  async signUpWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
}

signOut() {
  return this.afAuth.signOut();
}

addDocument(collectionName: string, data: any): Promise<any> {
  return this.firestore.collection(collectionName).add(data);
}




}
