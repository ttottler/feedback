import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { AppConfigService } from '../configuration/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class TokenApiService {

  constructor(private httpClient: HttpClient) { }

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
      this.httpClient.get(url, options).subscribe({
        next: (response) => {
          const returnStatus = response as ReturnStatus;
          resolve(returnStatus);
        }, error: (error) => {
          const returnStatus: ReturnStatus = {
            status: false,
            data: error,
            message: error.message
          }
          reject(returnStatus);
        }, complete: () => {

        }
      })
    });

  }

}
