import { DIR_DOCUMENT_FACTORY } from '@angular/cdk/bidi/dir-document-token';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { validateBasis } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { EndpointsService } from 'src/app/service/api/endpoints.service';
import { StudentApiService } from 'src/app/service/api/student/student-api.service';
import { StudentQueryService } from 'src/app/service/api/student/student-query.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  minRegNo: number = 7;
  maxRegNo: number = 10;

  registerNo: string = '';
  date: any;
  month: any;
  year: any;

  constructor(private commonService: CommonService,
    private endPointService: EndpointsService,
    private studentApiService: StudentApiService,
    private studentQueryService: StudentQueryService,
    private router: Router
    ) {
    commonService.childTitle = "Student Login to begin Feedback";
  }

  ngOnInit(): void {
    console.log('Feedback Master : ', CommonService.student['feedbackMaster']);

    this.registerNo = "1912001";
    this.date = "13";
    this.month = "6";
    this.year = "1998";
    // this.login();

  }

  ngOnDestroy(): void {
    this.registerNo = '';
    this.date = '';
    this.month = '';
    this.year = '';
  }

  async login() {

    if(await this.validateForm()){

      try {

        await this.studentApiService.login(
          this.endPointService.selectQueryPostMethod(),
          this.studentQueryService.login(this.registerNo, `${this.date}-${this.month}-${this.year}`)).then((val) => {
            const returnStatus: ReturnStatus = val as ReturnStatus;
            if(!returnStatus.status){
              this.commonService.showMessage(returnStatus.message);
            } else {
              if(Array.isArray(returnStatus.data) && !returnStatus.data.length){
                this.commonService.showMessage('Student Not Found');
              } else {

                // Student Found. Next check the Student Subject mapping has done
                CommonService.student['studentMaster'] = returnStatus.data[0];
                this.studentSubjectMapping();

              }
            }
          }, (error) => {
            this.commonService.showMessage(error.message);
          });

      } catch (error) {
        this.commonService.showMessage(JSON.stringify(error));
      }

    }
  }

  async studentSubjectMapping(){

    try {

      await this.studentApiService.getStudentSubject(
        this.endPointService.selectQueryPostMethod(),
        this.studentQueryService.getStudentSubject(
          CommonService.student.feedbackMaster.feedbackid,
          this.registerNo
        )
      ).then((val) => {

        const returnStatus: ReturnStatus = val as ReturnStatus;
        if(!returnStatus.status){
          this.commonService.showMessage(returnStatus.message);
        } else {
          if(Array.isArray(returnStatus.data) && !returnStatus.data.length){
            this.commonService.showMessage('Student and Subject Mapping Not Found');
          } else {
            // Student subject mapping is found
            CommonService.student.studentSubjectMaster = returnStatus.data;
            this.commonService.logIn();
            this.router.navigate(['feedback/student/entry']);
          }
        }

      }, (error) => {
        this.commonService.showMessage(error.message);
      });

    } catch (e) {
      this.commonService.showMessage(JSON.stringify(e));
    }

  }

  validateForm(){

    if(this.registerNo.length <= 6 || !this.date || !this.month){
      this.commonService.showMessage('Please Enter Valid Inputs');
      return false;
    }

    if(this.date < 10) this.date = "0".concat(this.date);
    if(this.month < 10) this.month = "0".concat(this.month);

    if(this.year < 1000) {
      this.commonService.showMessage('Please Enter Valid Inputs');
      return false;
    }

    return true;
  }

}
