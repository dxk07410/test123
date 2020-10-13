import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.scss']
})
export class BasicSearchComponent implements OnInit {

  sgridfiles: SGridFiles[];
  scols: any[];

  first = 0;
  rows = 10;

  constructor() { }

  ngOnInit(): void {
    this.sgridfiles = [
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet.'},
      {id: '100178', filename: 'Coco Cola', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
    ];
    this.scols = [
      {field: 'id', header: 'Account No'},
      {field: 'filename', header: 'File Name'},
      {field: 'name', header: 'Description'},
    ];
  }

  // next() {
  //     this.first = this.first + this.rows;
  // }

  // prev() {
  //     this.first = this.first - this.rows;
  // }

  // reset() {
  //     this.first = 0;
  // }

  // isLastPage(): boolean {
  //     return this.first === (this.cars.length - this.rows);
  // }

  // isFirstPage(): boolean {
  //     return this.first === 0;
  // }

}
export interface SGridFiles {
  id;
  filename;
  description;
}