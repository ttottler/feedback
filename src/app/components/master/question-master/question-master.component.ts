import { HttpClient } from '@angular/common/http';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MOCK_GET_FEEDBACK_TYPE_MASTER, MOCK_GET_QUESTION_MASTER } from 'src/app/constants/constants-mock';
import { FeedbackMasterInterface } from 'src/app/interface/master/feedback-master';
import { QuestionMasterInterface } from 'src/app/interface/master/question-master';
import { ModelFeedbackMaster } from 'src/app/model/model-feedback-master';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-question-master',
  templateUrl: './question-master.component.html',
  styleUrls: ['./question-master.component.css']
})
export class QuestionMasterComponent implements OnInit {

  feedbackMasters: FeedbackMasterInterface[] = [];
  questionMasters: QuestionMasterInterface[] = [];
  selectedFeedBackMaster: ModelFeedbackMaster = new ModelFeedbackMaster();
  showError: boolean = false;
  displayColumns:string[] = [
    'question'
  ];
  dataSource = new MatTableDataSource<QuestionMasterInterface>(this.questionMasters);

  constructor(private commonService: CommonService,
    private httpClient: HttpClient) {
    commonService.setChildTitle('Question Master');
   }

  ngOnInit(): void {
    this.getFeedbackMasters();
  }

  getFeedbackMasters() {
    this.httpClient.get(MOCK_GET_FEEDBACK_TYPE_MASTER).subscribe((data:any) => {
      this.feedbackMasters = data as FeedbackMasterInterface[];
    }, error => {
      this.commonService.showError(error);
    });
  }

  viewQuestionMaster(){

    if(undefined === this.selectedFeedBackMaster || 0 == this.selectedFeedBackMaster.feedbackid){
      this.showError = true;
      return;
    }
    this.httpClient.get(MOCK_GET_QUESTION_MASTER).subscribe((data:any) => {
      this.questionMasters = data as QuestionMasterInterface[];
      this.dataSource = new MatTableDataSource<QuestionMasterInterface>(this.questionMasters);
    }, error => {
      this.commonService.showError(error);
    });
  }

  clear() {
    this.dataSource = new MatTableDataSource<QuestionMasterInterface>([]);
  }

}
