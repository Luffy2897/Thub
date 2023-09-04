import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-embedded',
  templateUrl: './embedded.component.html',
  styleUrls: ['./embedded.component.css'],
})
export class EmbeddedComponent {
  constructor(private router: Router) {}
  basic4() {
    this.router.navigate(['/basic-e']);
  }
  intermediate4() {
    this.router.navigate(['/intermediate-e']);
  }

  expert4() {
    this.router.navigate(['/expert-e']);
  }

  advance4() {
    this.router.navigate(['/advance-e']);
  }
}
