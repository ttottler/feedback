import { Injectable } from '@angular/core';
import { TABLENAMES } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CommonQueryService {

  constructor() { }

  public querySelectActiveFeedbackmaster(feedbacktypecode: string) {
    const tableName = TABLENAMES.FEEDBACKMASTER;
    let query: string = `select * from ${tableName} `
      +`where feedbacktypecode = '${feedbacktypecode}' and active = 'Y'`;
    console.log(query);
    return query;
  }

  public querySelectQuestionMaster(feedbackid: string){
    let query: string = `select CONCAT('qn',questionid) as questionidstring, * from  ${TABLENAMES.QUESTIONMASTER} ` +
      `where feedbackid='${feedbackid}'`;
    console.log(query);
    return query;
  }

}
