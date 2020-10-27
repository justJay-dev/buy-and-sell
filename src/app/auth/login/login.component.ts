import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authError: any; //sorry, but this can be a lot of different things. Any type, yuck.

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }

  loginWithEmailClicked(form): void {
    this.auth.loginWithEmailClicked(form.value.email, form.value.password)
  }
  loginWithGoogleClicked(): void {
    this.auth.loginWithGoogleClicked()
  }

  signOutClicked(): void {
    this.auth.signOutClicked()
  }

}
