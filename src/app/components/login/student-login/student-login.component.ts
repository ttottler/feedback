import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
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

  registerNo: string = '';
  dateOfBirth: any;
  existingFeedback: any[] = [];

  constructor(private commonService: CommonService,
    private endPointService: EndpointsService,
    private studentApiService: StudentApiService,
    private studentQueryService: StudentQueryService,
    private router: Router,
    private datePipe: DatePipe
    ) {
    commonService.childTitle = "Student Login to begin Feedback";
  }

  ngOnInit(): void {
    // Default settings for check
    // this.setValueOnInit();
  }

  ngAfterViewInit(): void {
    console.log('Feedback Master : ', CommonService.student['feedbackMaster']);
  }

  setValueOnInit(){
    this.registerNo = "1912001";
    this.dateOfBirth = moment('13-JUN-1998', 'DD-MMM-yyyy');
    this.login();
  }

  async login() {

    if(await this.validateForm()){

      try {

        await this.fetchStudent();
        if(!CommonService.student['studentMaster'].registerno){
          return;
        }

        await this.studentSubjectMapping();
        if(!(CommonService.student.studentSubjectMaster.length > 0)){
          return;
        }

        await this.checkExistingFeedback();

        if(this.existingFeedback.length == 0){
          this.commonService.logIn();
          this.router.navigate(['feedback/student/entry']);
        } else {
          const ref = this.commonService.showMessage('You already given your feedback');
          ref.afterClosed().subscribe((next) => {
            this.router.navigate(['home']);
          })
        }

      } catch (error) {
        this.commonService.showMessage(JSON.stringify(error));
      }

    }
  }

  async fetchStudent() {
    await this.studentApiService.login(
      this.endPointService.selectQueryPostMethod(),
      this.studentQueryService.login(this.registerNo, `${this.datePipe.transform(this.dateOfBirth, 'dd/MM/YYYY')}`)).then((val) => {
        const returnStatus: ReturnStatus = val as ReturnStatus;
        if(!returnStatus.status){
          this.commonService.showMessage(returnStatus.message);
        } else {
          if(Array.isArray(returnStatus.data) && !returnStatus.data.length){
            this.commonService.showMessage('Student Not Found');
          } else {
            CommonService.student['studentMaster'] = returnStatus.data[0];
          }
        }
      }, (error) => {
        this.commonService.showMessage(error.message);
      });
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
          }
        }

      }, (error) => {
        this.commonService.showMessage(error.message);
      });

    } catch (e) {
      this.commonService.showMessage(JSON.stringify(e));
    }

  }

  async checkExistingFeedback() {

    try {

      await this.studentApiService.checkExistingFeedback(
        this.endPointService.selectQueryPostMethod(),
        this.studentQueryService.checkExistingStudentFeedback(
          CommonService.student.feedbackMaster.feedbackid,
          CommonService.student.feedbackMaster.feedbackid,
          CommonService.student['studentMaster'].registerno)).then((val) => {

            const returnStatus: ReturnStatus = val as ReturnStatus;
            if(!returnStatus.status){
              this.commonService.showMessage(returnStatus.message);
            } else {
              this.existingFeedback = returnStatus.data;
            }

          }, (error) => {
            this.commonService.showMessage(error.message);
          });

    } catch (error) {
      this.commonService.showMessage(JSON.stringify(error));
    }
  }

  validateForm(){

    if(!this.registerNo){
      this.commonService.showMessage('Enter Register Number');
      return false;
    }

    if(!this.dateOfBirth){
      this.commonService.showMessage('Select your Date of Birth');
      return false;
    }

    return true;
  }

}
