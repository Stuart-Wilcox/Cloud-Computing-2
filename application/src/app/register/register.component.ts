import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  err: String;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { this.err = ''; }


    ngOnInit() {
  }


   register() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    };

    if (this.username === '' || this.password === '') {
      this.err = 'Please fill in all fields';
      return false;
    }

    // Register user
    this.authService.register(this.username, this.password).then(result => {
      this.router.navigate(['/']);
    }).catch(err => {
      this.err = 'Something went wrong';
    });
  }
}
