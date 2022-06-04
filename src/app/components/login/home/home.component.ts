import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router,
    public commonService: CommonService) {
      commonService.childTitle = 'Home'
  }

  ngOnInit(): void {
  }

  adminModule() {

  }

  studentFeedback() {
    this.router.navigate(['login/student']);
  }

  staffFeedback() {

  }

}
