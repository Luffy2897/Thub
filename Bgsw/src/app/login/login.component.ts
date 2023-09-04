import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  ngOnInit() {
    history.pushState('', '', location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

  email: string;
  password: string;

  constructor(private router: Router) {
    this.email = '';
    this.password = '';
  }

  validateLogin(): void {
    // Check if the email and password are correct
    if (this.email === 'thub@bosch.in' && this.password === 'Learning') {
      // Redirect to the home page
      this.router.navigateByUrl('/home');
    } else {
      // Invalid email or password
      alert('Invalid email or password');
    }
  }
}
