import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-ecommerce';

  screenHeight: any;
  screenWidth: any;
  footerMaxHeight: number;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
    this.getScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    // console.log(this.screenHeight, this.screenWidth);
    this.footerMaxHeight = this.screenHeight - 130;//header and footer aprox
  }
}
