import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('had a request');
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log('Body', body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
