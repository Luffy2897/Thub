import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
     ngOnInit(){

  }
  constructor(private router:Router){}
  it(){
    this.router.navigate(["/it"]);
  }

}
