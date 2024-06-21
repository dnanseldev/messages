import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return [
      { id: 1, content: 'Das ist eine message 01' },
      { id: 2, content: 'Das ist eine message 02' },
      { id: 3, content: 'Das ist eine message 03' },
      { id: 4, content: 'Das ist eine message 04' },
    ];
  }

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessages() {}
}
