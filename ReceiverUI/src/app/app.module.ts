import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MessageBusService} from "../services/message-bus/message-bus.service";
import {CastReceiverManagerService} from "../services/cast-receiver-manager/cast-receiver-manager.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessageBusService,
    CastReceiverManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
