import { Injectable } from '@angular/core';
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

  constructor(public appConfigService: AppConfigService) {
    this.title = AppConfigService.applicationProperties.applicationTitle;
    this.childTitle = "";
   }

   public setChildTitle(childTitle: string){
    this.childTitle = childTitle;
   }

   public removeChildTitle(){
     this.childTitle = "";
   }

   public showError(error: any){

   }

}
