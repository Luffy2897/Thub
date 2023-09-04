import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent {
  ngOnInit(){

  }
  constructor(private router:Router){}
PMQ()
{
  this.router.navigate(["/PMQ"]);
}
TCQ()
{
  this.router.navigate(["/TCQ"]);
}
}
