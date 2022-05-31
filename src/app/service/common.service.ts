import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  title: string;

  constructor() {
    this.title = "";
   }

   public setChildTitle(title: string){
    this.title = title;
   }

   public removeChildTitle(){
     this.title = "";
   }

}
