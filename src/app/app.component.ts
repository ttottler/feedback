import { Component } from '@angular/core';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Student Feedback';
  enableMenu: boolean = true;
  menuButtonColor = 'accent';
  logoutButtonColor = 'primary';

  constructor(public commonService: CommonService){

  }

}
