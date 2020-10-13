import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  gridfiles: GridFiles[];
  cols: any[];

  data: any;
  bardata: any;

  constructor(
    private router : Router
  ) {
    this.data = {
      labels: ['Unassigned','Exceptions','Review Complete', 'In Progress'],
      datasets: [
          {
              data: [340, 50, 100, 150],
              backgroundColor: [
                  "#ffad01",
                  "#f64649",
                  "#0069b3",
                  "#366090"
              ],
              hoverBackgroundColor: [
                "#ffad01",
                "#f64649",
                "#0069b3",
                "#366090"
              ]
          }]    
      };

      this.bardata = {
        labels: ['Mid-Market', 'Large-Market', 'Mega-Market'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80]
            },
            {
                label: 'My Second dataset',
                backgroundColor: '#9CCC65',
                borderColor: '#7CB342',
                bardata: [28, 48, 40]
            }
        ]
    }
  }

  ngOnInit(): void {
    this.gridfiles = [
      {docname: 'Pension Plan', fileno: 1, company: 'digitech', segment: 'Mega Plan', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 2, company: 'digitech', segment: 'Large Market /institutional market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 3, company: 'digitech', segment: 'Mega Plan', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 4, company: 'digitech', segment: 'Mega Plan', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 5, company: 'digitech', segment: 'Mega Plan', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 6, company: 'digitech', segment: 'Mega Plan', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 7, company: 'digitech', segment: 'Mid Market /emerging market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 8, company: 'digitech', segment: 'Mid Market /emerging market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 9, company: 'digitech', segment: 'Large Market /institutional market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 10, company: 'digitech', segment: 'Large Market /institutional market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 11, company: 'digitech', segment: 'Large Market /institutional market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 12, company: 'digitech', segment: 'Mid Market /emerging market', date: '05-21-2020'},
      {docname: 'Pension Plan', fileno: 13, company: 'digitech', segment: 'Mid Market /emerging market', date: '05-21-2020'},
    ];
    this.cols = [
      {field: 'docname', header: 'Document Name'},
      {field: 'fileno', header: 'File Name'},
      {field: 'company', header: 'Company'},
      {field: 'segment', header: 'Segment'},
      {field: 'date', header: 'Effective Date'}
    ];
  }
  continue(){
    this.router.navigate(['/basicflow'])
  }

}
export interface GridFiles {
  docname;
  fileno;
  company;
  segment;
  date;
}
