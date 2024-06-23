import { IsString } from 'class-validator';

export class CreateMessageDto {
  //@IsNumber()
  @IsString()
  id: string;

  @IsString() content: string;
}
