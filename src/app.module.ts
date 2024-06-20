import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [MessagesModule],
  controllers: [MessagesController],
  providers: [AppService],
})
export class AppModule {}
