import { Component } from '@angular/core';
import {MessageBusService} from "../services/message-bus/message-bus.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';


  constructor(private _messageBusService: MessageBusService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this._messageBusService.init();

    this._messageBusService.messageBus.onMessage = (event) => {
      console.log("messageBus.onMessage: " + JSON.stringify(event["data"]));
      this.title = "Gay";
    }

    this._messageBusService.manager.start({statusText: "Application is starting"});

  }
}
