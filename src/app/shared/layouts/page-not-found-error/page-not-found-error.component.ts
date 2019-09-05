import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-not-found-error',
  templateUrl: './page-not-found-error.component.html',
  styleUrls: ['./page-not-found-error.component.scss']
})
export class PageNotFoundErrorComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  cancel() {
    this.location.back();
  }


}
