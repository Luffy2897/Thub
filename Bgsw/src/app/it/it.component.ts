import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css'],
})
export class ITComponent {
  constructor(private router: Router) {}
  basic() {
    this.router.navigate(['/basic']);
  }
  intermediate() {
    this.router.navigate(['/intermediate']);
  }

  expert() {
    this.router.navigate(['/expert']);
  }

  advance() {
    this.router.navigate(['/advance']);
  }
}
