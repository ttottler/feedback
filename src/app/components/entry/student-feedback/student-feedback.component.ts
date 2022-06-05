import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { CommonApiService } from 'src/app/service/api/common/common-api.service';
import { EndpointsService } from 'src/app/service/api/endpoints.service';
import { StudentApiService } from 'src/app/service/api/student/student-api.service';
import { StudentQueryService } from 'src/app/service/api/student/student-query.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent implements OnInit {

  feedbackMaster: any;
  studentMaster: any;
  studentSubjectMasterJoin:any[] = [];
  questionMasters: any[] = [];
  // currentQuestion: any;

  constructor(private commonService: CommonService,
    private endPointService: EndpointsService,
    private studentApiService: StudentApiService,
    private studentQueryService: StudentQueryService,
    private commonApiService: CommonApiService,
    private router: Router) {
      console.log('Feedback Master ', CommonService.student.feedbackMaster);
    console.log('Student Master ', CommonService.student.studentMaster);
    console.log('StudentSubject Master ', CommonService.student.studentSubjectMaster);
    console.log('Logged in ', this.commonService.loggedIn);
    this.feedbackMaster = CommonService.student.feedbackMaster;
    this.studentMaster = CommonService.student.studentMaster;
    this.studentSubjectMasterJoin = CommonService.student.studentSubjectMaster;

    this.commonService.setChildTitle(`Student Feedback - ${this.studentMaster.name.toUpperCase()}
      (${this.studentMaster.registerno}) Semester ${this.studentMaster.semester}`);

   }

  ngOnInit(): void {

    this.getQuestionMaster();

  }

  getQuestionMaster() {

    try {

      this.commonApiService.getQuestionMaster(this.feedbackMaster.feedbackid).then((val) => {
        const returnStatus: ReturnStatus = val as ReturnStatus;
            if(!returnStatus.status){
              this.commonService.showMessage(returnStatus.message);
            } else {
              if(Array.isArray(returnStatus.data) && !returnStatus.data.length){
                const ref = this.commonService.showMessage('Question Master Not Found for the feedbackid');
                ref.afterClosed().subscribe((next) => {
                  this.router.navigate(['home']);
                })
              } else {
                this.questionMasters = returnStatus.data;
                console.log(this.questionMasters);
                this.prepareMarksAwarded();
              }
            }
      }, (error) => {
        this.commonService.showMessage(error.message);
      })

    } catch (error) {
      this.commonService.showMessage(JSON.stringify(error));
    }
  }

  private prepareMarksAwarded(){

    // Now we have all the studentsubjectstaff mapping object
    // here we are going to add no of questions columns
    this.studentSubjectMasterJoin.forEach(mark => {
      this.questionMasters.forEach(questionMaster => {
        mark[`qn${questionMaster.questionid}`] = 0;
      });
    });

  }

  saveStudentFeedback(){
    if(this.validate()){

      this.studentApiService.saveFeedback(this.endPointService.insertQuery(),
        this.studentQueryService.getInsertQueryToSaveFeedback(
          this.questionMasters, this.studentSubjectMasterJoin, this.feedbackMaster.feedbackid)
      ).then((val) => {
        const returnStatus: ReturnStatus = val as ReturnStatus;
        if(!returnStatus.status){
          this.commonService.showMessage(returnStatus.message);
        } else {
          this.commonService.showMessage('Feedback Saved');
          this.commonService.logOut();
          this.router.navigate(['home']);
        }
      }, (error) => {
        this.commonService.showMessage(error.message);
      });

    }
  }

  validate() {
    let unansweredQuestions: string = '';

    for(let questionMaster of this.questionMasters){
      for(let studentSubject of this.studentSubjectMasterJoin){

        if(studentSubject[questionMaster.questionidstring] == 0
          && (
            (
            (questionMaster.questiontype == 'T' || questionMaster.questiontype == 'E')
            && (studentSubject.subjecttype == 'T' || studentSubject.subjecttype == 'E')
          ) ||
          (questionMaster.questiontype == 'L' && studentSubject.subjecttype == 'L'))
          ){
          if(unansweredQuestions.length != 0){
            unansweredQuestions += ', ';
          }
          unansweredQuestions+= questionMaster.questionid;
          break;
        }
      }
    }

    if(unansweredQuestions.length > 0){
      this.commonService.showMessage(`Unanswered Question : ${unansweredQuestions}`);
      return false;
    }

    return true;
  }


}
