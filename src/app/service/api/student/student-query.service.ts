import { Injectable } from '@angular/core';
import { TABLENAMES } from 'src/app/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class StudentQueryService {

  constructor() { }

  public login(registerno: string, dob: string): string {
    const query = `select * from ${TABLENAMES.STUDENTMASTER} `
      +`where registerno = '${registerno}' and dob = '${dob}' and active = 'Y'`;
    console.log( query);
    return query;
  }

  public getStudentSubject(feedbackId: string, registerno: string): string {

    const query = `select stsb.*, subjectname, subjecttype, ` +
      ` staffname, stf.departmentcode as staffdepartmentcode, stf.designationcode, ` +
      ` designationname  from ${TABLENAMES.STUDENTSUBJECT} stsb ` +
      ` Inner Join ${TABLENAMES.SUBJECTMASTER} sm on stsb.subjectcode = sm.subjectcode and sm.feedbackflag = 'Y'` +
      ` Left Join ${TABLENAMES.STAFFMASTER} stf on stsb.staffcode = stf.staffcode `+
      ` Left Join ${TABLENAMES.DESGINATION} dsg on stf.designationcode = dsg.designationcode `+
      ` where stsb.feedbackid = '${feedbackId}' and stsb.registerno = '${registerno}'`;
    console.log(query);
    return query;
  };

  public getInsertQueryToSaveFeedback(questionMasters: any[], studentSubjectMasters: any[],
    tableName: string) {

    const questionCount = questionMasters.length;
    let dynamicQnFields: string = '';
    for (let i = 1; i <= questionCount; i++) {
      if (dynamicQnFields.length != 0) {
        dynamicQnFields += `, `;
      }
      dynamicQnFields += `qn${i}`;
    }

    let query = `Insert into ${tableName} ` +
      `(feedbackid, studentsubjectid, createdby, ${dynamicQnFields}) values `;

    let values: string = '';

    for (const studentSubject of studentSubjectMasters) {
      if(values.length != 0){
        values += ', ';
      }
      values += `(`;
      values += `'${studentSubject.feedbackid}', '${studentSubject.studentsubjectid}', '` +
        `${studentSubject.registerno}'`;
      for (const questionMaster of questionMasters) {
        values += `, ${studentSubject[questionMaster.questionidstring]}`;
      }
      values += `) `;
    }

    query = `${query} ${values}`;

    console.log(query);
    return query;
  }

  public checkExistingStudentFeedback(feedbackid: string, tablename: string, registerno: string) {
    const query = `select FEEDBACKENTRYID from ${tablename} FB ` +
      `INNER JOIN (SELECT studentsubjectid, feedbackid from ${TABLENAMES.STUDENTSUBJECT} ` +
      `where feedbackid='${feedbackid}' and registerno = '${registerno}') STSB ` +
      `on (FB.studentsubjectid = STSB.studentsubjectid) `;
    console.log(query);
    return query;
  }

}
