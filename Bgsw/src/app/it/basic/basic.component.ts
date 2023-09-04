import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent {
  panelOpenState = false;
  // name = 'Angular ' + VERSION.major;

  // covenants: any = [
  //   { provinceID: "hari" },
  //   { provinceID: "Mahi" },
  //   { provinceID: 3 },
  //   { provinceID: 4 },
  //   { provinceID: 5 },
  // ];

  // openCoverages = false;
  // indexSelectedCoverage = 1;

  // ngOnInit() {
  //   this.covenants.forEach((_covenants: { isExpanded: boolean; }) => {
  //     _covenants.isExpanded = false;
  //   });
  // }
  // selectItemCoverages(index: number) {
  //   this.openCoverages = this.openCoverages && this.indexSelectedCoverage === index ? false : true;
  //   this.indexSelectedCoverage = index;
  // }
}
