import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageDialogComponent } from '../components/dialog/message-dialog/message-dialog.component';
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
  spinnerCaption = "Loading...";

  // Student Feedback Related
  static student: any = {
    feedbackMaster: {},
    studentMaster: {},
    studentSubjectMaster: []
  };

  static admin: any = {};

  enableAdminScreens = false;

  constructor(public appConfigService: AppConfigService,
    public matDialog: MatDialog,
    public spinner: NgxSpinnerService) {
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

  public showMessage(msg: string, title?: string, butCaption?: string) {

    const dialogConfig = new MatDialogConfig();
    // dialogConfig.height = '53vh';
    dialogConfig.disableClose = true;
    // const data = {
    //   infoMetaData
    // };
    dialogConfig.data = {
      message: msg,
      butCaption: !butCaption ? 'OK' : butCaption,
      title: !title ? 'Info' : title
    };

    const ref = this.matDialog.open(MessageDialogComponent, dialogConfig);
    // const ref = this.matDialog.open(InfoDialogComponent, dialogConfig);
    return ref;

  }

  public showSpinner(){
    this.spinner.show();
  }

  public hideSpinner(){
    this.spinner.hide();
  }

}
