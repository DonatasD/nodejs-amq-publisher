import {ClientService} from './client/client.service';
import {Injectable} from "@nestjs/common";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class PublisherService {
  constructor(private publisherClient: ClientService, private config: ConfigService) {
  }

  publish(value: string): void {
    this.publisherClient.publish({destination: this.config.get('amqConfig.topic'), body: value});
  }
}
