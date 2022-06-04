import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicationProperties } from 'src/app/interface/configuration/application-properties';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  static applicationProperties: ApplicationProperties;

  constructor(private httpClient: HttpClient) { }

  getConfig() {
    return new Promise<boolean>((resolve, reject) => {
      this.httpClient.get('assets/application-properties.json').subscribe((data) => {
        AppConfigService.applicationProperties = data as ApplicationProperties;
        console.log('Properties:', JSON.stringify(data));
        resolve(true);
      }, error => reject(error));
    });
  }

}
