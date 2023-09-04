import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css'],
})
export class CustomComponent {
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onBtnClick() {
    this.router.navigate(['/home']);
  }
}
