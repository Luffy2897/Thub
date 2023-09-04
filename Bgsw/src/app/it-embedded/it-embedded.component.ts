import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-it-embedded',
  templateUrl: './it-embedded.component.html',
  styleUrls: ['./it-embedded.component.css']
})
export class ITEMBEDDEDComponent {
  constructor(private router: Router) {}
  basicitemb() {
    this.router.navigate(['/basicitemb']);
  }
  intermediateitemb() {
    this.router.navigate(['/intermediateitemb']);
  }

  expertitemb() {
    this.router.navigate(['/expertitemb']);
  }

  advanceitemb() {
    this.router.navigate(['/advanceitemb']);
  }

}
