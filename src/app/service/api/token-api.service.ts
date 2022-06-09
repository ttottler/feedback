import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { CommonService } from '../common.service';
import { AppConfigService } from '../configuration/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService {

  constructor(private httpClient: HttpClient,
    private commonService: CommonService) { }

  public getToken(url: string): Promise<ReturnStatus> {

    const options = {
      headers: {
        'secret_key': AppConfigService.applicationProperties.secret_key,
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, X-Requested-With',
        'Access-Control-Allow-Credentials': 'true',
      }
    };

    return new Promise((resolve, reject) => {
      this.commonService.showSpinner();
      this.httpClient.get(url, options).subscribe({
        next: (response) => {
          // Actually here we dont need to hide the spinner because its handled in complete()
          // Anyway for safety purpose we have hide the spinner
          this.commonService.hideSpinner();
          const returnStatus = response as ReturnStatus;
          resolve(returnStatus);
        }, error: (error) => {
          // Here its mandatory to hide the spinner since if error throws it wont goes to complete()
          this.commonService.hideSpinner();
          const returnStatus: ReturnStatus = {
            status: false,
            data: error,
            message: error.message
          }
          reject(returnStatus);
        }, complete: () => {
          this.commonService.hideSpinner();
        }
      })
    });

  }

}
