import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from './publisher.service';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
