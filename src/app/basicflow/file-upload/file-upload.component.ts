import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['/dashboard'])
  }

}
