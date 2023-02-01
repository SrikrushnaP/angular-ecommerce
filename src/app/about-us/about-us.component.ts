import { Component, OnInit } from '@angular/core';
import { AboutUsService } from './services/about-us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  group_members;

  constructor(private aboutUsService: AboutUsService) { }
  
  ngOnInit() {
    this.getMembers()
  }

  getMembers = () => {
    this.aboutUsService.allMembers().subscribe(data => {
      this.group_members = data
    }, error => {
      console.error("Error", error);
    })
  }

}
