import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-program',
  templateUrl: './custom-program.component.html',
  styleUrls: ['./custom-program.component.css'],
})
export class CustomProgramComponent {
  selected = '';
  panelOpenState = false;
  selectedDifficulty: string;
  constructor() {
    this.selectedDifficulty = 'it';
    this.selectedDifficulty = 'it-emd';
    this.selectedDifficulty = 'process';
    this.selectedDifficulty = 'testing';
    this.selectedDifficulty = 'embedded';
    this.selectedDifficulty = 'electrical';
  }
}
