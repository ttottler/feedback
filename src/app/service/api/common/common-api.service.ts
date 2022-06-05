import { Injectable } from '@angular/core';
import { ApiExecuteService } from '../api-execute.service';
import { EndpointsService } from '../endpoints.service';
import { CommonQueryService } from './common-query.service';


@Injectable({
  providedIn: 'root'
})
export class CommonApiService {

  constructor(
    private endPointService: EndpointsService,
    private commonQueryService: CommonQueryService,
    private apiExecutorService: ApiExecuteService) {

  }

  public async getFeedBackMaster(feedbacktypecode: string) {

    const body = {
      query: this.commonQueryService.querySelectActiveFeedbackmaster(feedbacktypecode)
    };
    return await this.apiExecutorService.postMethod(
      this.endPointService.selectQueryPostMethod(), body);

  }

  public async getQuestionMaster(feedbackid: string){
    const body = {
      query: this.commonQueryService.querySelectQuestionMaster(feedbackid)
    };
    return await this.apiExecutorService.postMethod(
      this.endPointService.selectQueryPostMethod(), body);
  }


}
