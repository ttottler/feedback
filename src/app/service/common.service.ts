import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MessageDialogComponent } from '../components/dialog/message-dialog/message-dialog.component';
import { InterfaceFeedbackMaster } from '../model/response/feedbackmaster';
import { InterfaceStudentMaster } from '../model/response/studentmaster';
import { AppConfigService } from './configuration/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title: string;
  childTitle: string;
  enableMenu: boolean = false;
  menuButtonColor = 'accent';
  logoutButtonColor = 'primary';
  loggedIn: boolean = false;
  pinkColorCode: string = "#ff4081";
  backgroundPinkColor: string = "{'background-color': '`${pinkColorCode}`' }";
  homeScreen: boolean = false;

  // Student Feedback Related
  static student: any = {
    feedbackMaster: {},
    studentMaster: {},
    studentSubjectMaster: []
  };

  static admin: any = {};

  enableAdminScreens = false;

  constructor(public appConfigService: AppConfigService,
    public matDialog: MatDialog) {
    this.title = AppConfigService.applicationProperties.applicationTitle;
    this.childTitle = "";
  }

  public setChildTitle(childTitle: string) {
    this.childTitle = childTitle;
  }

  public removeChildTitle() {
    this.childTitle = "";
  }

  public showError(error: any) {

  }

  public logIn() {
    this.loggedIn = true;
  }

  public logOut() {
    this.loggedIn = false;
    this.childTitle = '';
  }

  public showMessage(msg: string) {

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.height = '53vh';
    dialogConfig.disableClose = true;
    const data = {
      message: msg
    };
    dialogConfig.data = data;

    const ref = this.matDialog.open(MessageDialogComponent, dialogConfig);
    return ref;

  }

}
