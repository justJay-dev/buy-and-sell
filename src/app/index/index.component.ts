import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }
  ngOnInit(): void {
  }
  isRegisterRoute(): boolean {
    return this.router.url === '/register'
  }

}
