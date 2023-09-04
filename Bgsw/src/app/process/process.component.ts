import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css'],
})
export class ProcessComponent {
  constructor(private router: Router) {}
  basicp() {
    this.router.navigate(['/basicp']);
  }
  intermediatep() {
    this.router.navigate(['/intermediatep']);
  }

  expertp() {
    this.router.navigate(['/expertp']);
  }

  advancep() {
    this.router.navigate(['/advancep']);
  }
}
