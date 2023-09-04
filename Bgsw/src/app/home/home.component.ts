import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  ngOnInit() {}
  constructor(private router: Router) {}
  Sat() {
    this.router.navigate(['/Sat']);
  }
  Qualification() {
    this.router.navigate(['/Qualification']);
  }
  it() {
    this.router.navigate(['/it']);
  }

  about() {
    this.router.navigate(['about']);
  }
  newsfeed() {
    this.router.navigate(['newsfeed']);
  }
  flashnews() {
    this.router.navigate(['flashnews']);
  }
  location() {
    this.router.navigate(['location']);
  }
  faq() {
    this.router.navigate(['faq']);
  }
}
