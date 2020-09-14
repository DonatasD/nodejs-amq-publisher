import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PublisherModule } from './publisher/publisher.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    PublisherModule,
  ],
})
export class AppModule {}
