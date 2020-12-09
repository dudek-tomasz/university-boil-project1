import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ResultComponent } from './result/result.component';
// import { Boil2Component } from './boil2/boil2.component';
// import { Boil1Component } from './boil1/boil1.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    // Boil2Component,
    // Boil1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
