import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ELECTRICALComponent {
  constructor(private router: Router) {}
  basicele() {
    this.router.navigate(['/basicele']);
  }
  intermediateele() {
    this.router.navigate(['/intermediateele']);
  }

  expertele() {
    this.router.navigate(['/expertele']);
  }

  advanceele() {
    this.router.navigate(['/advanceele']);
  }
}
