import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  authError: any; //fml

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    })
  }
  createUser(form): void {
    this.auth.createUserWithEmailClicked(form.value)
  }
}
