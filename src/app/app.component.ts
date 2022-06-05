import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnStatus } from './model/response/return-status';
import { EndpointsService } from './service/api/endpoints.service';
import { TokenApiService } from './service/api/token-api.service';
import { CommonService } from './service/common.service';
import { AppConfigService } from './service/configuration/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  adminEnable: boolean = false;

  constructor(public commonService: CommonService,
    public router: Router,
    public endpointService: EndpointsService,
    public tokenApiService: TokenApiService
    ){

  }

  ngOnInit(): void {

    this.retrieveToken();

  }

  async retrieveToken() {

    await this.tokenApiService.getToken(
      this.endpointService.getToken()).then(
        (val) => {
          const returnStatus = val as ReturnStatus;
          if(returnStatus.status){

            AppConfigService.applicationProperties.token = returnStatus.data.token;
            localStorage.setItem('token', !AppConfigService.applicationProperties.token
              ? '' : AppConfigService.applicationProperties.token);

            this.router.navigate(['home']);

          } else {
            this.commonService.showMessage(returnStatus.message);
          }
        },
        (err) => this.commonService.showMessage(err.message)
      );

  }

}
