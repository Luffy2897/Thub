import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sat',
  templateUrl: './sat.component.html',
  styleUrls: ['./sat.component.css']
})
export class SatComponent {
  ngOnInit(){

  }
  constructor(private router:Router){}
  custom_program(){
    this.router.navigate(["/custom_program"]);
  }
  open_calender(){
    this.router.navigate(["/open_calender"])
  }
}
