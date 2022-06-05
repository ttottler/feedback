import { Injectable } from '@angular/core';
import { AppConfigService } from '../configuration/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  constructor() { }

  getToken(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/get_token";
  }

  selectQuery(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/selectquery";
  }

  selectQueryPostMethod(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/selectquerypostmethod";
  }

  updateQuery(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/updatequery";
  }

  insertQuery(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/insertquery";
  }

  ddlQuery(): string {
    return AppConfigService.applicationProperties.baseapiurl + "/ddlquery";
  }

}
