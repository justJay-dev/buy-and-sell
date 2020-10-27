import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { BehaviorSubject } from 'rxjs'
import { auth } from 'firebase/app'
import { setupTestingRouter } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any; //TODO make a user type.


  constructor(
    public auth: AngularFireAuth,
    private router: Router,
  ) { }


  loginWithEmailClicked(email: string, password: string): void {
    this.auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error)
      })
      .then(userCredential => {
        if (userCredential) {
          this.router.navigateByUrl('/')
        }
      })
  }

  loginWithGoogleClicked(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider)
  }

  createUserWithEmailClicked(user): void {
    this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        this.router.navigateByUrl('/listings')
      })
      .catch(error => {
        this.eventAuthError.next(error)
      })
  }

  signOutClicked(): void {
    this.auth.signOut();
  }
}
