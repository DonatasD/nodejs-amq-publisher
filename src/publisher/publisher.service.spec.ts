import {PublisherService} from './publisher.service';
import {Test, TestingModule} from '@nestjs/testing';
import {PublisherController} from './publisher.controller';
import {ConfigService} from '@nestjs/config';
import {ClientService} from "./client/client.service";

describe('PublisherService', () => {
  let publisherService;
  let publisherController;

  beforeEach(async () => {
    const publisherModule: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [PublisherController],
      providers: [PublisherService, ConfigService, ClientService],
    }).compile();

    publisherService = publisherModule.get(PublisherService);
    publisherController = publisherModule.get(PublisherController);
  });

  it('should call', () => {
    jest.spyOn(publisherService, 'publish').mockImplementation();
    publisherController.publish();
    expect(publisherService.publish).toHaveBeenCalledTimes(1);
  });
});
