import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent {
  constructor(private router: Router) {}
  basict() {
    this.router.navigate(['/basict']);
  }
  intermediatet() {
    this.router.navigate(['/intermediatet']);
  }

  expertt() {
    this.router.navigate(['/expertt']);
  }

  advancet() {
    this.router.navigate(['/advancet']);
  }
}
