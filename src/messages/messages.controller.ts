import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id);
  }
}
