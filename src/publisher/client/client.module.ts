import { Module } from '@nestjs/common';
import { ClientService } from './client.service';

@Module({
  exports: [ClientService],
  providers: [ClientService],
})
export class ClientModule {}
