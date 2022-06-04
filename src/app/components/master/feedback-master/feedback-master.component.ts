import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MOCK_GET_FEEDBACK_TYPE_MASTER } from 'src/app/constants/constants-mock';
import { FeedbackMasterInterface } from 'src/app/interface/master/feedback-master';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-feedback-master',
  templateUrl: './feedback-master.component.html',
  styleUrls: ['./feedback-master.component.css']
})
export class FeedbackMasterComponent implements OnInit {

  feedbackMasters: FeedbackMasterInterface[] = [];
  dataSource: MatTableDataSource<FeedbackMasterInterface> = new MatTableDataSource<FeedbackMasterInterface>();
  displayColumns:string[] = ['feedbackname', 'min', 'max'];

  constructor(private commonService: CommonService,
    private httpClient: HttpClient) {
    commonService.setChildTitle('FeedBack Type Master');
   }

  ngOnInit(): void {
    this.getFeedbackMasters();
  }

  getFeedbackMasters() {
    this.httpClient.get(MOCK_GET_FEEDBACK_TYPE_MASTER).subscribe((data:any) => {
      this.feedbackMasters = data as FeedbackMasterInterface[];
      this.dataSource = new MatTableDataSource<FeedbackMasterInterface>(this.feedbackMasters);
    }, error => {
      this.commonService.showError(error);
    });
  }

}
