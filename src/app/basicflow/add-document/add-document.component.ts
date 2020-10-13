import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})
export class AddDocumentComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  continue(){
    this.router.navigate(['/fileupload'])
  }
  cancel(){
    this.router.navigate(['/dashboard'])
  }
  
}
