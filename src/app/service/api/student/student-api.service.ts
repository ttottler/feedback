import { Injectable } from '@angular/core';
import { ApiExecuteService } from '../api-execute.service';

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  constructor(private apiExecuteService: ApiExecuteService) { }

  public async login(url: string, query: string) {
    return await this.apiExecuteService.postMethod(url, {query});
  }

  public async getStudentSubject(url: string, query: string){
    return await this.apiExecuteService.postMethod(url, {query});
  }

  public async saveFeedback(url: string, query: string){
    return await this.apiExecuteService.postMethod(url, {query});
  }

}
