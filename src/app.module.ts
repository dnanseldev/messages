import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [MessagesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
