import {PublisherService} from './publisher.service';
import {Request, Response} from 'express';
import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('/publisher')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get('publish')
  publish(@Req() req: Request, @Res() res: Response): void {
    this.publisherService.publish("Hello world");
    res.sendStatus(201);
  }
}
