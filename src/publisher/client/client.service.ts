import {Client, IPublishParams} from '@stomp/stompjs';
import {Injectable, Logger} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class ClientService {
  private readonly client: Client;

  constructor(private configService: ConfigService) {
    this.client = new Client({
      brokerURL: configService.get('amqConfig.brokerUrl')
    });
    this.client.onConnect = (receipt) => Logger.debug(receipt);
    this.client.onStompError = (receipt) => Logger.debug(receipt);
    this.client.activate();
  }

  publish(publishParams: IPublishParams): void {
    this.client.publish(publishParams);
  }
}
