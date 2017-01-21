import {Injectable} from '@angular/core';
import {CastReceiverManagerService} from '../cast-receiver-manager/cast-receiver-manager.service';

@Injectable()
export class MessageBusService {
  private serviceId: string = "MessageBusService";
  messageBus: any;
  manager: any;

  constructor(private castReceiverManagerService: CastReceiverManagerService) {
  }

  public init = () => {
    this.castReceiverManagerService.init();

    if (this.messageBus != null)
        return false;

    console.log(this.serviceId + ".init");

    this.manager = this.castReceiverManagerService.manager;
    this.messageBus = this.manager.getCastMessageBus('urn:x-cast:com.angular2.chromecast.receiver.starterkit');

    return true;
  }
}
