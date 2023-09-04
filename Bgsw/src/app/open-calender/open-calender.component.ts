import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-calender',
  templateUrl: './open-calender.component.html',
  styleUrls: ['./open-calender.component.css'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
    NgIf,
    MatInputModule,
    FormsModule,
    MatTabsModule,
  ],
})
export class OpenCalenderComponent implements OnInit {
  panelOpenState = false;
  selected = '';
  excelSrc!: string;

  showExcel(url: string) {
    this.excelSrc = url;
  }
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onBtnClick() {
    this.router.navigate(['/custom']);
  }
  sat() {
    this.router.navigate(['/custom']);
  }
  oc() {
    this.router.navigate(['/open_calendar']);
  }
  log() {
    this.router.navigate(['']);
  }
}
