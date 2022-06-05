import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { AppConfigService } from '../configuration/app-config.service';

const options = {
  headers: {
    'secret_key': AppConfigService.applicationProperties.secret_key,
    'authorization': AppConfigService.applicationProperties.token,
    'Accept': 'application/json',
    'Content-Type' : 'application/json',
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, X-Requested-With',
    'Access-Control-Allow-Credentials': 'true',
  }
};

@Injectable({
  providedIn: 'root'
})
export class ApiExecuteService {

  constructor(private httpClient: HttpClient) {

  }

  public async postMethod(url: string, body: any) {
    return await new Promise((resolve, reject) => {
      this.httpClient.post(url, body, options).subscribe({
        next: (response) => {
          resolve(response as ReturnStatus);
        }, error: (error) => {
          const returnStatus: ReturnStatus = {
            status: false,
            data: error,
            message: error.message
          }
          reject(returnStatus);
        }, complete: () => {
          console.log('API Completed :', url);
        }
      });
    });
  }

}
