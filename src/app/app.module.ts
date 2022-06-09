import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSharedModule } from './components/ngshared/ng-shared-module';
import { MaterialComponentsModule } from './components/materialcomponents/material-components-module';
import { AppConfigService } from './service/configuration/app-config.service';
import { SharedComponentModule } from './components/common/shared-component/shared-component.module';
import { MessageDialogComponent } from './components/dialog/message-dialog/message-dialog.component';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from './libraries/custom-library/custom-date-format';
import { NgxComponentsModule } from './components/ngx-components/ngx-components/ngx-components.module';

export function appInit(appConfigService: AppConfigService) {
  return () => appConfigService.getConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSharedModule,
    MaterialComponentsModule,
    SharedComponentModule,
    NgxComponentsModule
  ],
  entryComponents: [MessageDialogComponent],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInit, deps: [AppConfigService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
