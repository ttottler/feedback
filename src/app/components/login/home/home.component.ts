import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ERRORMESSAGE, FEEDBACKTYPECODE } from 'src/app/constants/constants';
import { InterfaceFeedbackMaster } from 'src/app/model/response/feedbackmaster';
import { ReturnStatus } from 'src/app/model/response/return-status';
import { CommonApiService } from 'src/app/service/api/common/common-api.service';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
    public commonService: CommonService,
    public commonApiService: CommonApiService
    ) {
      commonService.childTitle = 'Home';
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.commonService.homeScreen = false;
  }

  adminModule() {

  }

  async studentFeedback() {

    try {

      await this.commonApiService.getFeedBackMaster(FEEDBACKTYPECODE.STUDENT).then((val) => {
        const returnStatus = val as ReturnStatus;
        if(!returnStatus.status){
          this.commonService.showMessage(returnStatus.message);
        } else {
          if(Array.isArray(returnStatus.data) && !returnStatus.data.length){
            this.commonService.showMessage(ERRORMESSAGE.NO_FEEDBACK_MASTER_ACTIVE);
          } else if(returnStatus.data.length > 1){
            this.commonService.showMessage(ERRORMESSAGE.MORE_THAN_ONE_FEEDBACK_IS_ACTIVE)
          } else {
            const feedBackMaster: InterfaceFeedbackMaster = (returnStatus.data as InterfaceFeedbackMaster[])[0];
            CommonService.student['feedbackMaster'] = feedBackMaster;
            localStorage.setItem('userid', CommonService.student.studentMaster.registerno);
            this.commonService.logIn();
            this.router.navigate(['login/student']);
          }

        }

      }, (err) => {
        this.commonService.showMessage(err.message)
      });

    } catch (exception) {
      this.commonService.showMessage(JSON.stringify(exception));
    }

  }

  staffFeedback() {

  }

}
