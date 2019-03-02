import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthService } from '@services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  public loginError: boolean;
  public loading: boolean;

  constructor(private router: Router, public authService: AuthService) {
    this.username = null;
    this.password = null;

    this.loginError = false;
    this.loading = false;
  }

  ngOnInit() {
  }

  dismiss(){
    this.loginError = false;
  }

  login() {
    // this.loading = true;
    this.authService
    .login(this.username, this.password)
    .then(result => {
      this.loading = false;
      this.router.navigate(['/dashboard']);
    }).catch(err => {
      this.loading = false;
      this.loginError = true;
      console.error(err);
    })
  }
}
