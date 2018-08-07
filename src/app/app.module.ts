import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RfqSendComponent } from './rfq-send/rfq-send.component';

export const ROUTES: Routes = [{ path: '', component: DashboardComponent }, { path: 'rfq', component: RfqSendComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LeftNavComponent,
    RightNavComponent,
    DashboardComponent,
    RfqSendComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
