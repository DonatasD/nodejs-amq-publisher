import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { ClientModule } from './client/client.module';
import {ClientService} from "./client/client.service";

@Module({
  imports: [ClientModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
