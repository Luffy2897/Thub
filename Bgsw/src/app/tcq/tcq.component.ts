import { Component } from '@angular/core';

@Component({
  selector: 'app-tcq',
  templateUrl: './tcq.component.html',
  styleUrls: ['./tcq.component.css']
})
export class TcqComponent {
  selectedDifficulty: string;
  selected='';

  constructor() {

    this.selectedDifficulty = 'it';

    this.selectedDifficulty = 'it-emd';

    this.selectedDifficulty = 'process';

    this.selectedDifficulty = 'testing';

    this.selectedDifficulty = 'embedded';

    this.selectedDifficulty = 'electrical';

  }
}
