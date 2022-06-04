import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './service/common.service';
import { AppConfigService } from './service/configuration/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public commonService: CommonService,
    public appConfigService: AppConfigService,
    public router: Router){

  }

  ngOnInit(): void {
    let userName = localStorage.getItem('userName');
    if (null === userName || '' === userName || undefined === userName) {
      this.router.navigate(['home']);
      return;
    } else {
      this.commonService.loggedIn = true;
    }
  }

}
